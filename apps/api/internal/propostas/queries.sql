-- name: ListPropostas :many
SELECT
    p.id,
    p.status,
    p.name,
    u.id AS assignee_id,
    u.email AS assignee_email
FROM propostas AS p

LEFT JOIN users AS u
    ON p.assignee_id = u.id

ORDER BY p.status;