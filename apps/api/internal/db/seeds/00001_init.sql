-- +goose Up
-- +goose StatementBegin
INSERT INTO
    users (id, email, password)
VALUES
    (1, 'pedro@gmail.com', 'pedro123'),
    (2, 'fabio@gmail.com', 'fabio123'),
    (3, 'roger@gmail.com', 'roger123'),
    (4, 'joao@gmail.com', 'joao123');

INSERT INTO
    propostas (id, status, name, assignee_id)
VALUES
    (1, 'backlog', 'Eatopia - Garrafas e Guardanapos', 1),
    (2, 'backlog', 'Canelle - Itens variados', NULL),
    (3, 'backlog', 'Adega Santiago - Lacres', 1),
    (4, 'backlog', 'Dona Deola - Itens Variados', NULL);
-- +goose StatementEnd

-- +goose Down
-- +goose StatementBegin
DELETE FROM users WHERE id IN (1, 2, 3, 4);
DELETE FROM propostas WHERE id IN (1, 2, 3, 4);
-- +goose StatementEnd