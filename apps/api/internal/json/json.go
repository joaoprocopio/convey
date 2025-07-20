package json

import (
	"encoding/json"
	"net/http"
)

func WriteJSONEncoded[T any](w http.ResponseWriter, r *http.Request, s int, v T) error {
	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(s)

	if err := json.NewEncoder(w).Encode(v); err != nil {
		return err
	}

	return nil
}

func ReadJSONDecoded[T any](r *http.Request) (T, error) {
	var v T

	if err := json.NewDecoder(r.Body).Decode(&v); err != nil {
		return v, err
	}

	return v, nil
}
