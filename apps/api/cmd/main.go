package main

import (
	"context"
	"convey/internal/server"
	"fmt"
	"log"
	"net/http"
	"os"
	"os/signal"
	"sync"
	"time"
)

func listen(srv *http.Server) {
	log.Printf("listening on %s\n", srv.Addr)

	if err := srv.ListenAndServe(); err != nil && err != http.ErrServerClosed {
		fmt.Fprintf(os.Stderr, "error listening and serving: %s\n", err)
	}
}

func teardown(wg *sync.WaitGroup, ctx context.Context, srv *http.Server) {
	defer wg.Done()
	<-ctx.Done()

	shutdownCtx := context.Background()
	shutdownCtx, cancel := context.WithTimeout(shutdownCtx, 10*time.Second)

	defer cancel()

	if err := srv.Shutdown(shutdownCtx); err != nil {
		fmt.Fprintf(os.Stderr, "error shutting down http server: %s\n", err)
	}
}

func run(ctx context.Context) error {
	ctx, cancel := signal.NotifyContext(ctx, os.Interrupt)
	defer cancel()

	srv := server.NewServer(server.NewConfig())

	go listen(srv)

	var wg sync.WaitGroup

	wg.Add(1)
	go teardown(&wg, ctx, srv)
	wg.Wait()

	return nil
}

func main() {
	ctx := context.Background()

	if err := run(ctx); err != nil {
		fmt.Fprintf(os.Stderr, "%s\n", err)
		os.Exit(1)
	}
}
