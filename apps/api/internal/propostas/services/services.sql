-- name: ListPropostas :many
SELECT
    id,
    status,
    name,
    assignee
FROM propostas
ORDER BY status;