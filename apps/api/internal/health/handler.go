package health

import (
	"convey/internal/json"
	"net/http"
)

func HandleHealth() http.HandlerFunc {
	type Response struct {
		Status string `json:"status"`
	}

	return func(w http.ResponseWriter, r *http.Request) {
		err := json.WriteJSONEncoded(w, r, http.StatusOK, Response{
			Status: "ok",
		})

		if err != nil {
			http.Error(w, err.Error(), http.StatusInternalServerError)
			return
		}
	}
}
