'use strict';

const ioHook = require('iohook');
const mqtt = require('mqtt')
const client  = mqtt.connect('mqtt://broker.hivemq.com')
 
client.on('connect', function () {
    console.log('Conectado no MQTT.')

    client.subscribe('MQTTDedicadoRecebe', function (err) {
        if (!err) {
            console.log('Inscrito no tópico!')
        }
    })
})

client.on('message', function (topic, message) {
    // message is Buffer
    const event = message.toString()

    if (event == 'L') {
        console.log('Porta aberta')
    } else {
        console.log('Porta fechada')
    }

    // client.end()
})

ioHook.on('keyup', event => {
    const { keycode, altKey } = event

    if (altKey && keycode == 30) {
        // console.log('Abrir porta')
        client.publish('MQTTDedicadoEnvia', 'L')
    }
});

// Register and start hook
ioHook.start();

// Alternatively, pass true to start in DEBUG mode.
ioHook.start(true);

console.log('Iniciando iohook')