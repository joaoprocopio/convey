package propostas

import (
	"context"
	"convey/internal/propostas/queries"
	"convey/internal/server/codec"
	"log/slog"
	"net/http"
)

func HandleListPropostas(ctx context.Context, logger *slog.Logger, qs *queries.Queries) http.HandlerFunc {
	type Assignee struct {
		ID    int32  `json:"id"`
		Email string `json:"email"`
	}
	type Proposta struct {
		ID       int32                  `json:"id"`
		Status   queries.PropostaStatus `json:"status"`
		Name     string                 `json:"name"`
		Assignee *Assignee              `json:"assignee"`
	}

	return func(w http.ResponseWriter, r *http.Request) {
		propostas, err := qs.ListPropostas(ctx)

		if err != nil {
			logger.Error("failed to list propostas", slog.String("error", err.Error()))
			http.Error(w, "failed to list propostas", http.StatusInternalServerError)
			return
		}

		p := propostas[0]

		var assignee *Assignee

		if p.AssigneeID.Valid {
			assignee = &Assignee{
				ID:    p.AssigneeID.Int32,
				Email: p.AssigneeEmail.String,
			}
		}

		codec.WriteEncodedJSON(w, r, http.StatusOK, Proposta{
			ID:       p.ID,
			Status:   p.Status,
			Name:     p.Name,
			Assignee: assignee,
		})
	}

}
