const Discord = require('discord.js')
const fs = require('fs')

module.exports.run = async (bot, message, args) => {
  
  var argresult = message.content.split(` `).slice(1).join(' ');
        message.delete();
  
        if (message.author.id == bot.user.id) {
            message.delete();
            let emb = new Discord.RichEmbed()
                .setDescription(argresult)
                .setThumbnail(`${message.author.displayAvatarURL}`)
                .setFooter("𝐏𝐫𝐨𝐣𝐞𝐜𝐭 𝐏𝐞𝐠𝐚𝐬𝐮𝐬 ♞ 𝐁𝐲 𝐒𝐦𝐨𝐤𝐞𝐌𝐲𝐖𝐞𝐞𝐃")
                .setColor("RANDOM")
            message.channel.sendEmbed(emb)
        }
    }
    

module.exports.help = {
    name: "embed"
}