package config

type Config struct {
	SrvHost    string
	SrvPort    string
	DbDatabase string
	DbHost     string
	DbPort     string
	DbUser     string
	DbPassword string
}

func DefaultConfig() *Config {
	return &Config{
		SrvHost:    "localhost",
		SrvPort:    "8000",
		DbDatabase: "postgres",
		DbHost:     "localhost",
		DbPort:     "5432",
		DbUser:     "postgres",
		DbPassword: "postgres",
	}
}
