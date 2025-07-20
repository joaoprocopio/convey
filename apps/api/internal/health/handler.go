package health

import (
	"convey/internal/json"
	"net/http"
)

func HandleHealth() http.HandlerFunc {
	type Response struct {
		Server string `json:"server"`
	}

	return func(w http.ResponseWriter, r *http.Request) {
		err := json.EncodeJSON(w, r, http.StatusOK, Response{
			Server: "ok",
		})

		if err != nil {
			http.Error(w, err.Error(), http.StatusInternalServerError)
			return
		}
	}
}
