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

var HandleListPropostas http.HandlerFunc = http.HandlerFunc(handleListPropostas)

func handleListPropostas(w http.ResponseWriter, r *http.Request) {
	var p []Proposta

	codec.WriteEncodedJSON(w, r, http.StatusOK, p)
}
