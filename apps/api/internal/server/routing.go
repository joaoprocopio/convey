package server

import (
	"convey/internal/health"
	"net/http"
)

func addRoutes(mux *http.ServeMux) {
	mux.Handle("GET /health", health.HandleHealth())
}
