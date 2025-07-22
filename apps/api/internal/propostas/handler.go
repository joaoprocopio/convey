package propostas

import (
	"context"
	"convey/internal/propostas/queries"
	"convey/internal/server/codec"
	"log/slog"
	"net/http"
)

func HandleListPropostas(ctx context.Context, logger *slog.Logger, qrs *queries.Queries) http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		propostas, err := qrs.ListPropostas(ctx)

		if err != nil {
			logger.Error("failed to list propostas", slog.String("error", err.Error()))
			http.Error(w, "failed to list propostas", http.StatusInternalServerError)
			return
		}

		codec.WriteEncodedJSON(w, r, http.StatusOK, serializeListPropostas(propostas))
	}

}
