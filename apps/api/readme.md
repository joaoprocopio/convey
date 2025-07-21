# api

## pré-requisitos

```sh
cd apps/api
docker compose up -d
go mod tidy
```

## rodar o backend

```sh
go run ./cmd/main.go
```

# banco de dados

## pré requisitos

```sh
export GOOSE_MIGRATION_DIR='./internal/db/migrations'
export GOOSE_DRIVER='postgres'
export GOOSE_DBSTRING='user=postgres password=postgres dbname=postgres host=localhost port=5432 sslmode=disable'
```

### criar uma migração

```sh
go tool goose create NOME_DA_MIGRATION sql
```

### subir as migrações

```sh
go tool goose up
```

### regerar o schema

```sh
go tool sqlc generate
```
