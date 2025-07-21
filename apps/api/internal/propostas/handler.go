package propostas

import (
	"convey/internal/server/codec"
	"net/http"
)

func HandleListPropostas() http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		var p []Proposta = make([]Proposta, 10)

		codec.WriteEncodedJSON(w, r, http.StatusOK, p)
	}

}
