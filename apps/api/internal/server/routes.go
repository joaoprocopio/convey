package server

import (
	"encoding/json"
	"net/http"
)

func handleHealth() http.HandlerFunc {
	type response struct {
		Server string `json:"server"`
	}

	return func(w http.ResponseWriter, r *http.Request) {
		encoder := json.NewEncoder(w)
		err := encoder.Encode(&response{
			Server: "ok",
		})
		if err != nil {
			http.Error(w, err.Error(), http.StatusInternalServerError)
			return
		}
	}
}

func addRoutes(mux *http.ServeMux) {
	mux.Handle("/health", handleHealth())
}
