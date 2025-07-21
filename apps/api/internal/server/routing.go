package server

import (
	"context"
	"convey/internal/health"
	"convey/internal/propostas"
	propostasQueries "convey/internal/propostas/queries"
	"database/sql"
	"log/slog"
	"net/http"
)

func addRoutes(
	mux *http.ServeMux,
	ctx context.Context,
	logger *slog.Logger,
	db *sql.DB,
	propostasQueries *propostasQueries.Queries,
) {
	mux.Handle("GET /health", health.HandleHealth(ctx, logger, db))
	mux.Handle("GET /propostas", propostas.HandleListPropostas(ctx, logger, propostasQueries))
}
