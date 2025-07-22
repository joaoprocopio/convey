package propostas

import (
	"convey/internal/propostas/queries"
)

type assignee struct {
	ID    int32  `json:"id"`
	Email string `json:"email"`
}

type proposta struct {
	ID       int32                  `json:"id"`
	Status   queries.PropostaStatus `json:"status"`
	Name     string                 `json:"name"`
	Assignee *assignee              `json:"assignee"`
}

func serializeListPropostas(rows []queries.ListPropostasRow) []proposta {
	propostas := make([]proposta, len(rows))

	for i, row := range rows {
		var a *assignee
		var p proposta

		if row.AssigneeID.Valid && row.AssigneeEmail.Valid {
			a = &assignee{
				ID:    row.AssigneeID.Int32,
				Email: row.AssigneeEmail.String,
			}
		}

		p = proposta{
			ID:       row.ID,
			Status:   row.Status,
			Name:     row.Name,
			Assignee: a,
		}

		propostas[i] = p
	}

	return propostas
}
