const Discord = require('discord.js');

const client = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES"] });

const prefix = '-';

const fs = require('fs');

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}

client.once('ready', () =>{
     console.log('RozvrhBOT je online!');
});

client.on('message', message => {
    if(!message.content.startsWith(prefix) || message.author.bot) return;
    
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command === 'rozvrh'){
        client.commands.get('rozvrh2D').execute(message, args, Discord);

    } 

     if (command == 'cau'){
       client.commands.get('ahoj').execute(message, args);
    }

    if (command == 'pomoc'){
        client.commands.get('helpa').execute(message, args, Discord);
     } 

});












client.login('OTY5NzAxMzk5NjQ0NDkxODU2.GLSbjo.-8UpvqiCFN9PgOQsQTuQqWsJwCMQ97dJN0unQ0');