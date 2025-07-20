package json

import (
	"encoding/json"
	"fmt"
	"net/http"
)

func EncodeJSON[T any](w http.ResponseWriter, r *http.Request, s int, v T) error {
	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(s)

	if err := json.NewEncoder(w).Encode(v); err != nil {
		return fmt.Errorf("encode json: %w", err)
	}

	return nil
}

func DecodeJSON[T any](r *http.Request) (T, error) {
	var v T

	if err := json.NewDecoder(r.Body).Decode(&v); err != nil {
		return v, fmt.Errorf("decode json: %w", err)
	}

	return v, nil
}
