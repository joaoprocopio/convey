package propostas

import (
	"convey/internal/server/codec"
	"net/http"
)

type Proposta struct {
	ID          int                  `json:"id"`
	Status      string               `json:"status"`
	Name        string               `json:"name"`
	Assignee    string               `json:"assignee"`
	Attachments []PropostaAttachment `json:"attachments"`
}

type PropostaAttachment struct {
	ContentType string `json:"content_type"`
	Filename    string `json:"filename"`
	URL         string `json:"url"`
}

func HandleListPropostas() http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		var p []Proposta = make([]Proposta, 10)

		codec.WriteEncodedJSON(w, r, http.StatusOK, p)
	}

}
