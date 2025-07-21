package propostas

type Status string

func (s Status) String() string {
	return string(s)
}

const (
	StatusBacklog  Status = "backlog"
	StatusPendente Status = "pendente"
)

type Proposta struct {
	ID          int                  `json:"id"`
	Status      Status               `json:"status"`
	Name        string               `json:"name"`
	Assignee    string               `json:"assignee"`
	Attachments []PropostaAttachment `json:"attachments"`
}

type PropostaAttachment struct {
	ContentType string `json:"content_type"`
	Filename    string `json:"filename"`
	URL         string `json:"url"`
}
