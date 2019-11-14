const Discord = require('discord.js');
const fs = require('fs');

module.exports.run = async (bot, message, args) => {
    
  var argresult = message.content.split(` `).slice(1).join(' ');
        message.delete();
        if (message.author.id == bot.user.id) {
            message.delete();
            var kiss = new Discord.RichEmbed()
                .setAuthor(`𝐏𝐫𝐨𝐣𝐞𝐜𝐭 𝐏𝐞𝐠𝐚𝐬𝐮𝐬 ♞`, `${bot.user.displayAvatarURL}`)
                .setThumbnail(`${bot.user.displayAvatarURL}`)
                .setColor("RANDOM")
                .addField(`${message.author.username} 𝐓'𝐞𝐦𝐛𝐫𝐚𝐬𝐬𝐞💋`, argresult)
                .setTimestamp()
                .setImage("https://media.giphy.com/media/bGm9FuBCGg4SY/giphy.gif")
                .setFooter("𝐏𝐫𝐨𝐣𝐞𝐜𝐭 𝐏𝐞𝐠𝐚𝐬𝐮𝐬 ♞ 𝐁𝐲 𝐒𝐦𝐨𝐤𝐞𝐌𝐲𝐖𝐞𝐞𝐃")
            message.channel.sendEmbed(kiss)
        }
    }


module.exports.help = {
    name: "kiss"
}