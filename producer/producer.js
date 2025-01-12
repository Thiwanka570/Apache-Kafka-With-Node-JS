const { Kafka } = require('kafkajs')

// create new kafka instance
const kafka = new Kafka({
    clientId: 'my-sample-app',
    brokers: ['localhost:9092']
})

// create new kafka instance
const producer = kafka.producer();

// async func
const run = async () => {
    //connect producer
    await producer.connect();

    await producer.send({
        topic: 'test-topic2',
        messages: [
            { value: 'hello kafka with node js..' }
        ]
    })
}

console.log('message send to kafka')

run().catch(console.error)