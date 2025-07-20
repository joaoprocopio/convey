package health

import (
	"convey/internal/json"
	"net/http"
)

func HandleHealth() http.Handler {
	type response struct {
		Server string `json:"server"`
	}

	var mux *http.ServeMux = http.NewServeMux()

	mux.HandleFunc("/123", func(w http.ResponseWriter, r *http.Request) {
		err := json.EncodeJSON(w, r, http.StatusOK, response{
			Server: "123",
		})

		if err != nil {
			http.Error(w, err.Error(), http.StatusInternalServerError)
			return
		}
	})

	mux.HandleFunc("/abc", func(w http.ResponseWriter, r *http.Request) {
		err := json.EncodeJSON(w, r, http.StatusOK, response{
			Server: "abc",
		})

		if err != nil {
			http.Error(w, err.Error(), http.StatusInternalServerError)
			return
		}
	})

	mux.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		err := json.EncodeJSON(w, r, http.StatusOK, response{
			Server: "ok",
		})

		if err != nil {
			http.Error(w, err.Error(), http.StatusInternalServerError)
			return
		}
	})

	var handler http.Handler = mux

	return handler
}
