package propostas

import (
	"convey/internal/server/codec"
	"net/http"
)

type Proposta struct {
	ID int `json:"id"`
}

var HandleListPropostas http.HandlerFunc = http.HandlerFunc(handleListPropostas)

func handleListPropostas(w http.ResponseWriter, r *http.Request) {
	codec.WriteEncodedJSON(w, r, http.StatusOK, Proposta{
		ID: 1,
	})
}
