module.exports = {
    name: 'ahoj',
    description: "toto je odzdravenie",
    execute(message, args){
        message.channel.send('Nazdar!');
    }
}