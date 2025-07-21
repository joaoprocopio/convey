package server

import (
	"convey/internal/health"
	"convey/internal/propostas"
	"net/http"
)

func addRoutes(mux *http.ServeMux) {
	mux.Handle("GET /health", health.HandleHealth)
	mux.Handle("GET /propostas", propostas.HandleListPropostas)
}
