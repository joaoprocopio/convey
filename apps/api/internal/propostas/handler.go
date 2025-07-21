package propostas

import (
	"context"
	"convey/internal/propostas/services"
	"convey/internal/server/codec"
	"log/slog"
	"net/http"
)

func HandleListPropostas(ctx context.Context, logger *slog.Logger, queries *services.Queries) http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		propostas, err := queries.ListPropostas(ctx)

		if err != nil {
			logger.Error("failed to list propostas", slog.String("error", err.Error()))
			http.Error(w, "failed to list propostas", http.StatusInternalServerError)
			return
		}

		codec.WriteEncodedJSON(w, r, http.StatusOK, propostas)
	}

}
