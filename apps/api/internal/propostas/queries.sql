-- name: ListPropostas :many
SELECT
    id,
    status,
    name
FROM propostas
ORDER BY status;