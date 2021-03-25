# sozei-desafio-backend
Desafio de back-end da empresa Sozei

## Rotas

### Listar todas as ferramentas cadastradas
```
GET /tools
```
```
::: Filtrar ferramentas utilizando uma busca por tag.
GET /tools?tag=node
```
```
::: Retorno. (HTTP 200)
Content-Type: application/json
```

### Cadastrar nova ferramenta
```
POST /tools
```
```
::: Envio.
Content-Type: application/json
```
```
::: Retorno. (HTTP 201)
Content-Type: application/json
Obs: Retornar as mesmas informações de entrada, porém adicionando o ID.
```

### Remover ferramenta por ID
```
DELETE /tools/:id
```
```
::: Retorno. (HTTP 204)
```