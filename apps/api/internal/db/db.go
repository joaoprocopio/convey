package db

import (
	"database/sql"
	"fmt"
	"net/url"

	_ "modernc.org/sqlite"
)

func New() (*sql.DB, error) {
	path := "file:convey.sqlite3"
	params := url.Values{}

	params.Add("cache", "shared")
	params.Add("mode", "rwc")
	params.Add("journal_mode", "WAL")
	params.Add("foreign_keys", "on")

	addr := fmt.Sprintf("%s?%s", path, params.Encode())

	db, err := sql.Open("sqlite", addr)

	if err != nil {
		return nil, err
	}

	return db, nil
}
