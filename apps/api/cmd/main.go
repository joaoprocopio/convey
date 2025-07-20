package main

import (
	"context"
	"convey/internal/server"
	"fmt"
	"log/slog"
	"net/http"
	"os"
	"os/signal"
	"time"

	"golang.org/x/sync/errgroup"
)

func main() {
	ctx := context.Background()
	logger := slog.New(slog.NewTextHandler(os.Stdout, nil))

	if err := run(ctx, logger); err != nil {
		logger.Error("main: error running server", slog.String("error", err.Error()))
		os.Exit(1)
	}
}

func run(ctx context.Context, logger *slog.Logger) error {
	ctx, cancel := signal.NotifyContext(ctx, os.Interrupt)
	defer cancel()
	g, ctx := errgroup.WithContext(ctx)

	srv := server.NewServer(server.NewConfig(), logger)

	g.Go(func() error {
		return startup(srv, logger)
	})

	g.Go(func() error {
		return shutdown(ctx, srv, logger)
	})

	if err := g.Wait(); err != nil {
		return err
	}

	return nil
}

func startup(srv *http.Server, logger *slog.Logger) error {
	logger.Info("main: server is listening", slog.String("address", fmt.Sprintf("http://%s", srv.Addr)))

	if err := srv.ListenAndServe(); err != nil && err != http.ErrServerClosed {
		return err
	}

	return nil
}

func shutdown(ctx context.Context, srv *http.Server, logger *slog.Logger) error {
	<-ctx.Done()

	ctx, cancel := context.WithTimeout(ctx, 10*time.Second)
	defer cancel()

	if err := srv.Shutdown(ctx); err != nil {
		return err
	} else {
		logger.Info("main: gracefully shutting down http server")
	}

	return nil
}
