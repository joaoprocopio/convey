package propostas

import (
	"convey/internal/propostas/queries"
)

type PropostaAttachment struct {
	ID       int32  `json:"id"`
	Filename string `json:"filename"`
	Mimetype string `json:"mimetype"`
}

type PropostaAssignee struct {
	ID    int32  `json:"id"`
	Email string `json:"email"`
}

type Proposta struct {
	ID          int32                        `json:"id"`
	Status      queries.PropostaStatus       `json:"status"`
	Name        string                       `json:"name"`
	Assignee    *PropostaAssignee            `json:"assignee"`
	Attachments map[int32]PropostaAttachment `json:"attachments"`
}

func serializeListPropostas(rows []queries.ListPropostasRow) map[int32]Proposta {
	propostas := make(map[int32]Proposta)

	for _, row := range rows {
		proposta, ok := propostas[row.ID]

		if !ok {
			var assignee *PropostaAssignee

			if row.AssigneeID.Valid {
				assignee = &PropostaAssignee{
					ID:    row.AssigneeID.Int32,
					Email: row.AssigneeEmail.String,
				}
			}

			proposta = Proposta{
				ID:          row.ID,
				Status:      row.Status,
				Name:        row.Name,
				Assignee:    assignee,
				Attachments: make(map[int32]PropostaAttachment),
			}

			propostas[row.ID] = proposta
		}

		if row.AttachmentID.Valid {
			proposta.Attachments[row.AttachmentID.Int32] = PropostaAttachment{
				ID:       row.AttachmentID.Int32,
				Filename: row.AttachmentFilename.String,
				Mimetype: row.AttachmentMimetype.String,
			}
		}

	}

	return propostas
	// return slices.Collect(maps.Values(propostas))
}
