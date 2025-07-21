package health

import (
	"convey/internal/server/codec"
	"net/http"
)

var HandleHealth http.HandlerFunc = http.HandlerFunc(handleHealth)

func handleHealth(w http.ResponseWriter, r *http.Request) {
	type health struct {
		Status string `json:"status"`
	}

	err := codec.WriteEncodedJSON(w, r, http.StatusOK, health{
		Status: "ok",
	})

	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}
}
