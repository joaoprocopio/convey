-- +goose Up
-- +goose StatementBegin
CREATE TABLE propostas (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    status VARCHAR(255) NOT NULL,
    name VARCHAR(255) NOT NULL,
    assignee VARCHAR(255) NOT NULL
);
-- +goose StatementEnd

-- +goose Down
-- +goose StatementBegin
DROP TABLE propostas;
-- +goose StatementEnd
