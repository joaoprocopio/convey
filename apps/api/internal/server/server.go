package server

import (
	"context"
	"database/sql"
	"log/slog"
	"net"
	"net/http"
)

func NewServer(cfg *Config, ctx context.Context, db *sql.DB, logger *slog.Logger) *http.Server {
	var mux *http.ServeMux = http.NewServeMux()

	addRoutes(mux, ctx, logger, db)

	var handler http.Handler = mux

	handler = loggerMiddleware(handler, logger)

	var server *http.Server = &http.Server{
		ErrorLog: slog.NewLogLogger(logger.Handler(), slog.LevelError),
		Addr:     net.JoinHostPort(cfg.Host, cfg.Port),
		Handler:  handler,
	}

	return server
}
