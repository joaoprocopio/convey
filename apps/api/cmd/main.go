package main

import (
	"context"
	"convey/internal/server"
	"log/slog"
	"net/http"
	"os"
	"os/signal"
	"sync"
	"time"
)

func main() {
	ctx := context.Background()
	logger := slog.New(slog.NewTextHandler(os.Stdout, nil))

	slog.SetDefault(logger)

	if err := run(ctx, logger); err != nil {
		logger.Error("main: error running server", slog.String("error", err.Error()))
		os.Exit(1)
	}
}

func run(ctx context.Context, logger *slog.Logger) error {
	ctx, cancel := signal.NotifyContext(ctx, os.Interrupt)
	defer cancel()

	srv := server.NewServer(server.NewConfig(), logger)

	go listen(srv, logger)

	var wg sync.WaitGroup

	wg.Add(1)
	go shutdown(&wg, ctx, srv, logger)
	wg.Wait()

	return nil
}

func listen(srv *http.Server, logger *slog.Logger) {
	logger.Info("main: listening on", slog.String("address", srv.Addr))

	if err := srv.ListenAndServe(); err != nil && err != http.ErrServerClosed {
		logger.Error("main: error listening and serving", slog.String("error", err.Error()))
	}
}

func shutdown(wg *sync.WaitGroup, ctx context.Context, srv *http.Server, logger *slog.Logger) {
	defer wg.Done()
	<-ctx.Done()

	shutdownCtx := context.Background()
	shutdownCtx, cancel := context.WithTimeout(shutdownCtx, 10*time.Second)

	defer cancel()

	if err := srv.Shutdown(shutdownCtx); err != nil {
		logger.Error("main: error shutting down http server", slog.String("error", err.Error()))
	} else {
		logger.Info("main: gracefully shutting down http server")
	}
}
