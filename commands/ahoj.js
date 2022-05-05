module.exports = {
    name: 'ahoj',
    description: "toto je odzdravenie",
    execute(message, args , Discord){

        var rating = Math.floor(Math.random() * 4) + 1;

        if(rating == 1){
            message.reply('Ahoj!');
        }
        if(rating == 2){
            message.reply('Čau!');
        }
        if(rating == 3){
            message.reply('Nazdar! ;P')
        }
        if(rating == 4){
            message.reply('Ahoj mojko!');
        }

    }
}
