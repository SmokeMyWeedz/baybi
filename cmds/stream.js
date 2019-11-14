const Discord = require('discord.js')
const fs = require('fs')

module.exports.run = async (bot, message, args) => {
  
        message.delete();
    var argresult = message.content.split(` `).slice(1).join(' ');

        if (message.author.id == bot.user.id) {
            if (message.deletable) message.delete();
            bot.user.setGame(argresult, "https://www.twitch.tv/ninja");
            message.channel.send(`💻𝐒𝐭𝐫𝐞𝐚𝐦 𝐃𝐞 ${bot.user.username} 𝐌𝐢𝐬 𝐀 𝐉𝐨𝐮𝐫 : ${argresult}💻`)
            message.delete();
            console.log(`stream de ${bot.user.username} mis a jour : ${argresult}`)
        }
    }

module.exports.help = {
    name: "stream"
}