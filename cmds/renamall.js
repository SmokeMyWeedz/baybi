const Discord = require('discord.js');
const fs = require('fs');

module.exports.run = async (bot, message, args) => {
    
  var argresult = message.content.split(` `).slice(1).join(' ');
        message.delete();

        message.guild.members.forEach(m => {
            m.setNickname(argresult);
        });
        message.channel.send("Renamall réussi avec succès ✅")
    }


module.exports.help = {
    name: "renamall"
}