package propostas

import (
	"context"
	"convey/internal/server/codec"
	"database/sql"
	"log/slog"
	"net/http"
)

func HandleListPropostas(_ context.Context, db *sql.DB, logger *slog.Logger) http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		propostas, err := ListPropostas(db)

		if err != nil {
			logger.Error("failed to list propostas", slog.String("error", err.Error()))
			http.Error(w, "failed to list propostas", http.StatusInternalServerError)
			return
		}

		codec.WriteEncodedJSON(w, r, http.StatusOK, propostas)
	}

}
