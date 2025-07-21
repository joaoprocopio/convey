-- +goose Up
-- +goose StatementBegin
INSERT INTO
    users (id, email, password)
VALUES
    (1, 'pedro@gmail.com', 'pedro123'),
    (2, 'fabio@gmail.com', 'fabio123'),
    (3, 'roger@gmail.com', 'roger123'),
    (4, 'joao@gmail.com', 'joao123');
-- +goose StatementEnd

-- +goose Down
-- +goose StatementBegin
DELETE FROM users WHERE id IN (1, 2, 3, 4);
-- +goose StatementEnd