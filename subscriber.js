const amqp = require('amqplib')
let queue = 'hello'

const Subscriber = async () => {
    let connection = await amqp.connect('amqp://localhost:5672')
    let channel = await connection.createChannel()

    channel.assertQueue(queue, { durable: false })
    channel.prefetch(1)

    console.log(` [*] Aguardando por mensagens na fila: ${queue}.`)

    channel.consume(queue, msg => {
        console.log(` [x] Recebida a mensagem ${msg.content.toString()}`, )
        channel.ack(msg) //confirmação de uma mensagem recebida
    }, { noAck: false })
    process.once('SIGINT', () => conn.close())
}
Subscriber()
