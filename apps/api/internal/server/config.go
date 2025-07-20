package server

type Config struct {
	Host string
	Port string
}

func NewDefaultConfig() *Config {
	return &Config{
		Host: "localhost",
		Port: "8000",
	}
}
