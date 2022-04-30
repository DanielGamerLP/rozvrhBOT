const Discord = require('discord.js');

module.exports = {
    name: 'helpa',
    description: "tu su vsetky commandy",
    execute(message, args, Discord){
        const ahojjo = new Discord.MessageEmbed()

        .setColor('#0677D7')
        .setTitle('Vsetky commandy pre "rozvrhBOT"')
        .addFields(
            {name: '-rozvrh' , value: 'obrazok rozvrhu'},
            {name: '-cau', value: 'pozdrav od BOTa'},
            {name: '-pomoc', value: 'vsetky commandy'},
        )
        .setImage('https://images.unsplash.com/photo-1611267254323-4db7b39c732c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y3V0ZSUyMGNhdHxlbnwwfHwwfHw%3D&w=1000&q=80');

        message.channel.send({embeds: [ahojjo] });
        
    }
}
