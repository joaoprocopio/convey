# convey

## api

antes de tudo

```sh
cd apps/api
```

rodar o backend

```sh
go mod tidy
go run ./cmd/main.go
```

criar uma migração

```sh
go tool goose -dir ./internal/db/migrations postgres create NOME_DA_MIGRATION sql
```

subir as migrações

```sh
go tool goose -dir ./internal/db/migrations postgres up
```

regerar o schema

```sh
go tool sqlc generate
```
