package health

import (
	"convey/internal/json"
	"net/http"
)

func healthcheck(w http.ResponseWriter, r *http.Request) {
	type Response struct {
		Status string `json:"status"`
	}

	err := json.WriteEncodedJSON(w, r, http.StatusOK, Response{
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
