package server

type Config struct {
	Host string
	Port string
}

func NewConfig() *Config {
	return &Config{
		Host: "localhost",
		Port: "8000",
	}
}
