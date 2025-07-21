package propostas

import (
	"convey/internal/server/codec"
	"net/http"
)

type Proposta struct {
	ID          int                  `json:"id"`
	Status      string               `json:"status"`
	Assignee    string               `json:"assignee"`
	Name        string               `json:"name"`
	Attachments []PropostaAttachment `json:"attachments"`
}

type PropostaAttachment struct {
	ContentType string `json:"content_type"`
	Filename    string `json:"filename"`
	URL         string `json:"url"`
}

var HandleListPropostas http.HandlerFunc = http.HandlerFunc(handleListPropostas)

func handleListPropostas(w http.ResponseWriter, r *http.Request) {
	codec.WriteEncodedJSON(w, r, http.StatusOK, []Proposta{
		{
			ID:       1,
			Status:   "backlog",
			Assignee: "pedro@embalae.com",
			Name:     "Proposta de Embalagem",
			Attachments: []PropostaAttachment{
				{
					ContentType: "application/pdf",
					Filename:    "proposta.pdf",
					URL:         "https://example.com/proposta.pdf",
				},
				{
					ContentType: "image/png",
					Filename:    "logo.png",
					URL:         "https://example.com/logo.png",
				},
			},
		},
	})
}
