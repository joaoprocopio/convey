package server

import (
	"log/slog"
	"net"
	"net/http"
)

func NewServer(cfg *Config, logger *slog.Logger) *http.Server {
	var mux *http.ServeMux = http.NewServeMux()

	addRoutes(mux)

	var handler http.Handler = mux

	// middlewares

	var server *http.Server = &http.Server{
		ErrorLog: slog.NewLogLogger(logger.Handler(), slog.LevelError),
		Addr:     net.JoinHostPort(cfg.Host, cfg.Port),
		Handler:  handler,
	}

	return server
}
