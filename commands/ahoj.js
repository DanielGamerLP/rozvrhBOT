module.exports = {
    name: 'ahoj',
    description: "toto je odzdravenie",
    execute(message, args , Discord){

        var rating = Math.floor(Math.random() * 4) + 1;

        if(rating == 1){
            message.reply('Nazdar!');
        }
        if(rating == 2){
            message.reply('Cau!');
        }
        if(rating == 3){
            message.reply('Cmuk! ;P')
        }
        if(rating == 4){
            message.reply('Ahoj mojko *O*');
        }
        
        message.reply(`Cislo je zo ${rating}/4`);

    }
}
