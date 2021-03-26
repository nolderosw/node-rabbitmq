const amqp = require('amqplib')
let msg = 'Hello World 123!'
let queue = 'hello'

const Publisher = async () => {
    let connection = await amqp.connect('amqp://localhost:5672')
    let channel = await connection.createChannel()

    channel.assertQueue(queue, { durable: false })
    channel.sendToQueue(queue, new Buffer.from(msg))

    console.log(`[x] Enviada a mensagem ${msg} para a fila ${queue}`)
    setTimeout(() => { connection.close(); process.exit(0) }, 500)
}
Publisher()
