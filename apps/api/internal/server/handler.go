package server

import (
	"net"
	"net/http"
)

func NewServer(cfg *Config) *http.Server {
	var mux *http.ServeMux = http.NewServeMux()

	addRoutes(mux)

	var handler http.Handler = mux

	// middlewares

	var server *http.Server = &http.Server{
		Addr:    net.JoinHostPort(cfg.Host, cfg.Port),
		Handler: handler,
	}

	return server
}
