const Discord = require('discord.js');
const fs = require('fs');

module.exports.run = async (bot, message, args) => {
    
  var argresult = message.content.split(` `).slice(1).join(' ');
        message.delete();
        if (message.author.id == bot.user.id) {
            if (message.deletable) message.delete()
            var veski = new Discord.RichEmbed()
            .setAuthor(`𝐏𝐫𝐨𝐣𝐞𝐜𝐭 𝐏𝐞𝐠𝐚𝐬𝐮𝐬 ♞`, `${bot.user.displayAvatarURL}`)
            .setColor("RANDOM")
            .setThumbnail(`${bot.user.displayAvatarURL}`)
                .addBlankField()
                .addField("𝐕𝐞𝐬𝐤𝐢 𝐃𝐞 𝐋𝐚 𝐏𝐚𝐫𝐭 𝐃𝐞 ", argresult)
                .setImage("https://media1.giphy.com/media/clEoSalMEOZk4/giphy.gif")
                .setTimestamp()
                .setFooter("𝐏𝐫𝐨𝐣𝐞𝐜𝐭 𝐏𝐞𝐠𝐚𝐬𝐮𝐬 ♞ 𝐁𝐲 𝐒𝐦𝐨𝐤𝐞𝐌𝐲𝐖𝐞𝐞𝐃")
            message.channel.sendEmbed(veski)
        }
    }


module.exports.help = {
    name: "veski"
}