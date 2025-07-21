-- +goose Up
-- +goose StatementBegin
INSERT INTO
    propostas (id, status, name, assignee_id)
VALUES
    (1, 'backlog', 'Eatopia - Garrafas e Guardanapos', 1),
    (2, 'backlog', 'Canelle - Itens variados', 1),
    (3, 'backlog', 'Adega Santiago - Lacres', 1),
    (4, 'backlog', 'Dona Deola - Itens Variados', 1);
-- +goose StatementEnd

-- +goose Down
-- +goose StatementBegin
DELETE FROM propostas WHERE id IN (1, 2, 3, 4);
-- +goose StatementEnd