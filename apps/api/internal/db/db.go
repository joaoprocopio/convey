package db

import (
	"context"
	"convey/internal/config"
	"fmt"

	"github.com/jackc/pgx/v5"
)

type DB = pgx.Conn

func New(ctx context.Context, cfg *config.Config) (*pgx.Conn, error) {
	dsn := fmt.Sprintf(
		"postgres://%s:%s@%s:%s/%s",
		cfg.DbUser,
		cfg.DbPassword,
		cfg.DbHost,
		cfg.DbPort,
		cfg.DbDatabase,
	)
	db, err := pgx.Connect(ctx, dsn)

	if err != nil {
		return nil, err
	}

	return db, nil
}
