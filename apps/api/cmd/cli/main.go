package main

import (
	"context"
	"convey/internal/server"
	"fmt"
	"io"
	"log"
	"net/http"
	"os"
	"os/signal"
	"sync"
	"time"
)

type runConfig struct {
	ctx            context.Context
	stdin          io.Reader
	stdout, stderr io.Writer
}

func run(cfg *runConfig) error {
	ctx, cancel := signal.NotifyContext(cfg.ctx, os.Interrupt)
	defer cancel()

	srv := server.NewServer(server.NewConfig())

	go func() {
		log.Printf("listening on %s\n", srv.Addr)

		if err := srv.ListenAndServe(); err != nil && err != http.ErrServerClosed {
			fmt.Fprint(cfg.stderr, "error listening and serving: %s\n", err)
		}
	}()

	var wg sync.WaitGroup

	wg.Add(1)

	go func() {
		defer wg.Done()
		<-ctx.Done()

		shutdownCtx := context.Background()
		shutdownCtx, cancel := context.WithTimeout(shutdownCtx, 10*time.Second)

		defer cancel()

		if err := srv.Shutdown(shutdownCtx); err != nil {
			fmt.Fprintf(cfg.stderr, "error shutting down http server: %s\n", err)
		}
	}()

	wg.Wait()

	return nil
}

func main() {
	ctx := context.Background()
	cfg := &runConfig{
		ctx:    ctx,
		stdin:  os.Stdin,
		stdout: os.Stdout,
		stderr: os.Stderr,
	}

	if err := run(cfg); err != nil {
		fmt.Fprintf(cfg.stderr, "%s\n", err)
		os.Exit(1)
	}
}
