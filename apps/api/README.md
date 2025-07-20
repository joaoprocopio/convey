# api

This is the JSON-RPC API that will handle most of the heavy lifting related to managing business logic, handling data changes, able to schedule jobs, publish to async queues and etc.

## Setup

1. You need to have Golang installed and available in your path with the version according to the `go.mod` file.

   > Follow this guide: https://go.dev/doc/install

2. Install needed packages

```sh
go mod tidy
```

3. Run the application

```sh
go tool air
```
