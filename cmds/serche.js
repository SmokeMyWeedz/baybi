const Discord = require('discord.js');
const fs = require('fs');

module.exports.run = async (bot, message, args) => {
  
	message.delete();

        if (message.author.id == bot.user.id) {
            message.delete();
            let args = message.content.split(" ")
            args.shift()
            message.channel.send(' https://www.google.fr/search?q=' + args.join("%20"))
        }
    };


module.exports.help = {
    name: "serche"
} 
