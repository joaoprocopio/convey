package propostas

import (
	"context"
	"convey/internal/propostas/queries"
	"convey/internal/server/codec"
	"log/slog"
	"net/http"
	"strconv"
)

func HandleListPropostas(ctx context.Context, logger *slog.Logger, qrs *queries.Queries) http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		params := r.URL.Query()
		cursor, err := strconv.ParseInt(params.Get("cursor"), 10, 32)

		if err != nil {
			logger.Error("cursor should be a valid integer", slog.String("error", err.Error()))
			http.Error(w, "cursor should be a valid integer", http.StatusInternalServerError)
			return
		}

		limit, err := strconv.ParseInt(params.Get("limit"), 10, 32)

		if err != nil {
			limit = 10
		}

		propostas, err := qrs.ListPropostas(ctx, queries.ListPropostasParams{
			Cursor: int32(cursor),
			Limit:  int32(limit),
		})

		if err != nil {
			logger.Error("failed to list propostas", slog.String("error", err.Error()))
			http.Error(w, "failed to list propostas", http.StatusInternalServerError)
			return
		}

		codec.WriteEncodedJSON(w, r, http.StatusOK, serializeListPropostas(propostas))
	}

}
