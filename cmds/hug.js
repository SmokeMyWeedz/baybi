const Discord = require('discord.js');
const fs = require('fs');

module.exports.run = async (bot, message, args) => {
    
  var argresult = message.content.split(` `).slice(1).join(' ');
        message.delete();
        if (message.author.id == bot.user.id) {
            message.delete();
            var hug = new Discord.RichEmbed()
                .setAuthor(`𝐏𝐫𝐨𝐣𝐞𝐜𝐭 𝐏𝐞𝐠𝐚𝐬𝐮𝐬 ♞`, `${bot.user.displayAvatarURL}`)
                .setThumbnail(`${bot.user.displayAvatarURL}`)
                .setColor("RANDOM")
                .addField(`${message.author.username} te fais un câlin`, argresult)
                .setTimestamp()
                .setImage("https://i.pinimg.com/originals/6b/4b/b8/6b4bb8820a05a841d3317172b7b0224f.gif")
                .setFooter("𝐏𝐫𝐨𝐣𝐞𝐜𝐭 𝐏𝐞𝐠𝐚𝐬𝐮𝐬 ♞ 𝐁𝐲 𝐒𝐦𝐨𝐤𝐞𝐌𝐲𝐖𝐞𝐞𝐃")
            message.channel.sendEmbed(hug)
        }
    }


module.exports.help = {
    name: "hug"
}