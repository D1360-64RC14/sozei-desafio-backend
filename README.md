# sozei-desafio-backend
Desafio de back-end da empresa Sozei

## Instalação
Clone o repositório
```
git clone https://github.com/D1360-64RC14/sozei-desafio-backend.git
```
Instale os pacotes necessários
```
npm install
```

### Configuração da base de dados (PostgreSQL)
No arquivo `ormconfig.json` insira as informações da base de dados
```json
   "host": "172.18.0.2",
   "port": 5432,
   "username": "postgres",
   "password": "masterpassword",
   "database": "production",
```

### Configuração do servidor Express
Caso queira, modifique as configurações do Express de `hostname` e `port` no arquivo `.env`
```
SERVER_PORT=3000
SERVER_HOSTNAME=localhost
```

### First Launch
Inicialmente é necessário compilar a aplicação, faça isso com
```bash
npm run build
```

Agora, inicie a base de dados (em docker ou local), e crie uma database na qual os dados serão gravados. *(não esqueça que deve ser a mesma configurada no ormconfig.json)*.  
Após criar a database, execute o seguinte comando para preparar ela.
```bash
npm run typeorm migration:run
```
Após isso tudo já está configurado, agora é só abrir o servidor
```bash
npm run server
```
Se tudo funcionar, irá aparecer uma mensagem parecida com a seguinte no terminal
```bash
> sozei-desafio-backend@1.0.0 server
> node build/index.js

2021-03-26 17:01:16 Server iniciado na porta 3000
```
<br>

Agora todas as rotas já devem estar funcionando 😀. Para verificar quais são, vá até a rota `/docs`. <br>
Ex:
```
http://localhost:3000/docs
```
