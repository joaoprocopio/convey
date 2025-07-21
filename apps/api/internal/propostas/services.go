package propostas

import "database/sql"

func ListPropostas(db *sql.DB) ([]Proposta, error) {
	rows, err := db.Query("SELECT id, status, name, assignee FROM propostas")

	if err != nil {
		return nil, err
	}
	defer rows.Close()

	var propostas []Proposta

	for rows.Next() {
		var p Proposta

		if err := rows.Scan(&p.ID, &p.Status, &p.Name, &p.Assignee); err != nil {
			return nil, err
		}

		propostas = append(propostas, p)
	}

	return propostas, nil
}
