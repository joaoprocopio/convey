package server

import (
	"convey/internal/health"
	"net/http"
)

func addRoutes(mux *http.ServeMux) {
	mux.Handle("/health/", http.StripPrefix("/health", health.HandleHealth()))
}
