module.exports = {
    name: 'rozvrh',
    description: "toto je obrazok rozvrhu",
    execute(message, args){
        message.channel.send('Toto je rozvrh: \n'),
        message.channel.send('https://github.com/DanielGamerLP/rozvrhBOT/blob/main/rozvrhCely.png?raw=true');
        
    }
}