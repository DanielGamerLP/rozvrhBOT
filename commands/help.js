module.exports = {
    name: 'help',
    description: "tu su vsetky commandy",
    execute(message, args){
        message.channel.send('Vsetky commandy pre "rozvrhBOT":\n'),
        message.channel.send('-rozvrh');
        message.channel.send('-ahoj');
        message.channel.send('-help');
        
    }
}