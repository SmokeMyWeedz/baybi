const Discord = require('discord.js');
const fs = require('fs');

module.exports.run = async (bot, message, args) => {
    
        message.delete();
        if (message.author.id == bot.user.id) {
            if (message.deletable) message.delete()
            let ping = new Discord.RichEmbed()
                .setAuthor(`𝐏𝐫𝐨𝐣𝐞𝐜𝐭 𝐏𝐞𝐠𝐚𝐬𝐮𝐬 ♞ ${bot.user.username} 🌀`)
                .setFooter("𝐏𝐫𝐨𝐣𝐞𝐜𝐭 𝐏𝐞𝐠𝐚𝐬𝐮𝐬 ♞ 𝐁𝐲 𝐒𝐦𝐨𝐤𝐞𝐌𝐲𝐖𝐞𝐞𝐃")
                .addField("𝐋𝐚𝐭𝐞𝐧𝐜𝐞 𝐃𝐮 𝐒𝐞𝐥𝐟𝐁𝐨𝐭", `𝐓𝐨𝐧 𝐏𝐢𝐧𝐠 : ${bot.pings[0]}ms`)
                .setThumbnail(`${bot.user.displayAvatarURL}`)
                .setTimestamp()
                .setColor('RANDOM')
            message.channel.sendEmbed(ping)

        }
    }


module.exports.help = {
    name: "ping"
}