package server

import (
	"context"
	"convey/internal/health"
	"convey/internal/propostas"
	"database/sql"
	"log/slog"
	"net/http"
)

func addRoutes(mux *http.ServeMux, ctx context.Context, db *sql.DB, logger *slog.Logger) {
	mux.Handle("GET /health", health.HandleHealth(ctx, db, logger))
	mux.Handle("GET /propostas", propostas.HandleListPropostas())
}
