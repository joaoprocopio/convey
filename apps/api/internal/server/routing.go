package server

import (
	"context"
	"convey/internal/health"
	"convey/internal/propostas"
	propostasQueries "convey/internal/propostas/services"
	"database/sql"
	"log/slog"
	"net/http"
)

func addRoutes(mux *http.ServeMux, ctx context.Context, logger *slog.Logger, db *sql.DB) {
	propostasQueries := propostasQueries.New(db)

	mux.Handle("GET /health", health.HandleHealth(ctx, db, logger))
	mux.Handle("GET /propostas", propostas.HandleListPropostas(ctx, logger, propostasQueries))
}
