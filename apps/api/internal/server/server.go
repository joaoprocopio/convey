package server

import (
	"context"
	propostasQueries "convey/internal/propostas/queries"
	"database/sql"
	"log/slog"
	"net"
	"net/http"
)

func NewServer(cfg *Config, ctx context.Context, db *sql.DB, logger *slog.Logger, propostasQueries *propostasQueries.Queries) *http.Server {
	var mux *http.ServeMux = http.NewServeMux()

	addRoutes(
		mux,
		ctx,
		logger,
		db,
		propostasQueries,
	)

	var handler http.Handler = mux

	handler = loggerMiddleware(handler, logger)

	var srv *http.Server = &http.Server{
		ErrorLog: slog.NewLogLogger(logger.Handler(), slog.LevelError),
		Addr:     net.JoinHostPort(cfg.Host, cfg.Port),
		Handler:  handler,
	}

	return srv
}
