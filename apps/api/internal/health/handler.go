package health

import (
	"convey/internal/server/codec"
	"net/http"
)

func healthcheck(w http.ResponseWriter, r *http.Request) {
	type Response struct {
		Status string `json:"status"`
	}

	err := codec.WriteEncodedJSON(w, r, http.StatusOK, Response{
		Status: "ok",
	})

	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}
}

func HandleHealth() http.Handler {
	return http.HandlerFunc(healthcheck)
}
