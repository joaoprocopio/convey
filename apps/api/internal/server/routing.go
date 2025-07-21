package server

import (
	"convey/internal/health"
	"convey/internal/propostas"
	"database/sql"
	"log/slog"
	"net/http"
)

func addRoutes(mux *http.ServeMux, db *sql.DB, logger *slog.Logger) {
	mux.Handle("GET /health", health.HandleHealth(db, logger))
	mux.Handle("GET /propostas", propostas.HandleListPropostas)
}
