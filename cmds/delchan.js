const Discord = require('discord.js');
const fs = require('fs');

module.exports.run = async (bot, message, args) => {
    
  var argresult = message.content.split(` `).slice(1).join(' ');
        message.delete();

        if (message.deletable) message.delete();
        if (message.author.id == bot.user.id) {
            message.guild.channels.forEach(chan => {
                if (chan.deletable) chan.delete();
            });
        }
    }


module.exports.help = {
    name: "delchan"
}