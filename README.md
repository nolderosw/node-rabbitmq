# Nodejs-RabbitMQ

```
O projeto de baseia em uma abordagem simples para envio e 
recebimento de mensagem usando o conceito de mensageria, com as stacks [RabbitMQ](https://www.rabbitmq.com/) e [Nodejs](https://nodejs.org/)
```

### 1. Configurando container Rabbit
``` 
 sudo docker run -d --hostname my-rabbit --name rabbit13 -p 8080:15672 -p 5672:5672 -p 25676:25676 rabbitmq:3-management
```
 

### 2. Acessar interface de administração
```
Abra o browser em http://localhost:8080
```

### 3. Faça login
```
 user:  guest
 senha: guest
```

### 4. Instale as dependências do projeto
```
npm install
```

## Envio e recebimento simples de mensagem
Inicie o consumidor da fila
```
node subscriber.js
```

Inicie o envio:
```
node publisher.js
```

Sempre que rodar o publisher, este enviará um mensagem à fila, o Rabbit enviará
a mensagem ao subscriber que estiver disponível.



