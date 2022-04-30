const { Discord } = require('discord.js');

module.exports = {
    name: 'rozvrh2D',
    description: "toto je obrazok rozvrhu",
    execute(message, args, Discord){
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#CA1919')
        .setTitle('ROZVRH 2.D')
        .addFields(
            {name: 'Rozvrh na cely tyzden:' , value: '2.D'},
        )
        .setImage('https://github.com/DanielGamerLP/rozvrhBOT/blob/main/obrazky/rozvrhCely.png?raw=true');

        message.channel.send({embeds: [newEmbed] });
    }
}