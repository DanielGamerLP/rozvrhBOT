module.exports = {
    name: 'ahoj',
    description: "toto je odzdravenie",
    execute(message, args , Discord){
        message.channel.send('Nazdar!')
    }
}