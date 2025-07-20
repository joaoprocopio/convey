package server

import (
	"log/slog"
	"net/http"
)

func loggerMiddleware(h http.Handler, logger *slog.Logger) http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		logger.Info("Request received", "method", r.Method, "url", r.URL)

		h.ServeHTTP(w, r)
	})
}
