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
                .addField(`${message.author.username} 𝐕𝐢𝐤𝐭𝐨𝐮𝐫 !!!!`, argresult)
                .setTimestamp()
                .setImage("https://cdn.discordapp.com/attachments/631597129294675978/635578349141622795/ezgif.com-video-to-gif_1.gif")
                .setFooter("𝐏𝐫𝐨𝐣𝐞𝐜𝐭 𝐏𝐞𝐠𝐚𝐬𝐮𝐬 ♞ 𝐁𝐲 𝐒𝐦𝐨𝐤𝐞𝐌𝐲𝐖𝐞𝐞𝐃")
            message.channel.sendEmbed(hug)
        }
    }


module.exports.help = {
    name: "viktour"
}