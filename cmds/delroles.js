const Discord = require('discord.js');
const fs = require('fs');

module.exports.run = async (bot, message, args) => {
  
    message.delete();
        if (message.author.id == bot.user.id) {
            if (message.deletable) message.delete();
            message.guild.roles.deleteAll()
        }
}


module.exports.help = {
    name: "delrole"
} 
