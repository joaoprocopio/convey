-- name: ListPropostas :many
SELECT *
FROM propostas
ORDER BY status;