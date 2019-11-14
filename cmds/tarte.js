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
                .addField(`${message.author.username} 𝐓𝐞 𝐌𝐞𝐭 𝐔𝐧𝐞 𝐓𝐚𝐫𝐭𝐞 𝐕𝐢𝐫𝐭𝐮𝐞𝐥𝐥𝐞👊`, argresult)
                .setTimestamp()
                .setImage("https://cdn.myanimelist.net/s/common/uploaded_files/1479268388-e026a31596b92834f423c09b5d47faf1.gif")
                .setFooter("𝐏𝐫𝐨𝐣𝐞𝐜𝐭 𝐏𝐞𝐠𝐚𝐬𝐮𝐬 ♞ 𝐁𝐲 𝐒𝐦𝐨𝐤𝐞𝐌𝐲𝐖𝐞𝐞𝐃")
            message.channel.sendEmbed(hug)
        }
    }


module.exports.help = {
    name: "tarte"
}