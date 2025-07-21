package server

import (
	"database/sql"
	"log/slog"
	"net"
	"net/http"
)

func NewServer(cfg *Config, db *sql.DB, logger *slog.Logger) *http.Server {
	var mux *http.ServeMux = http.NewServeMux()

	addRoutes(mux, db, logger)

	var handler http.Handler = mux

	handler = loggerMiddleware(handler, logger)

	var server *http.Server = &http.Server{
		ErrorLog: slog.NewLogLogger(logger.Handler(), slog.LevelError),
		Addr:     net.JoinHostPort(cfg.Host, cfg.Port),
		Handler:  handler,
	}

	return server
}
