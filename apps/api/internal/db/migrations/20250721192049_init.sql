-- +goose Up
-- +goose StatementBegin
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    email VARCHAR(254) UNIQUE NOT NULL
);

CREATE TABLE propostas (
    id SERIAL PRIMARY KEY,
    status VARCHAR(255) NOT NULL,
    name VARCHAR(255) NOT NULL,
    assignee_id INTEGER NOT NULL,

    FOREIGN KEY (assignee_id) REFERENCES users (id)
);
-- +goose StatementEnd

-- +goose Down
-- +goose StatementBegin
DROP TABLE propostas;
DROP TABLE users;
-- +goose StatementEnd
