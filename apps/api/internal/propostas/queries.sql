-- name: ListPropostas :many
SELECT
    p.id,
    p.status,
    p.name,
    u.id AS assignee_id,
    u.email AS assignee_email,
    pa.id AS attachment_id,
    pa.filename AS attachment_filename,
    pa.mimetype AS attachment_mimetype
FROM propostas AS p

LEFT JOIN users AS u
    ON p.assignee_id = u.id

LEFT JOIN proposta_attachments AS pa
    ON pa.proposta_id = p.id

WHERE
    p.id > sqlc.arg('cursor')

ORDER BY p.id
LIMIT sqlc.arg('limit');