const Discord = require('discord.js')
const fs = require('fs')

module.exports.run = async (bot, message, args) => {
  
        message.delete();
        if (message.author.id != bot.user.id) return
        let rotate = 0;
        setInterval(function() {
            if (rotate === 0) {
                bot.user.setActivity("𝐏𝐫𝐨𝐣𝐞𝐜𝐭 𝐏𝐞𝐠𝐚𝐬𝐮𝐬 ♞", { type: "Streaming", url: 'https://www.twitch.tv/𝐏𝐫𝐨𝐣𝐞𝐜𝐭 𝐏𝐞𝐠𝐚𝐬𝐮𝐬 ♞' });
                rotate = 1;
            } else if (rotate === 1) {
                bot.user.setActivity("𝐒𝐞𝐥𝐟𝐁𝐨𝐭", { type: "Streaming", url: 'https://www.twitch.tv/ninja' });
                rotate = 2;
            } else if (rotate === 2) {
                bot.user.setActivity("𝐁𝐲 𝐒𝐦𝐨𝐤𝐞𝐌𝐲𝐖𝐞𝐞𝐝", { type: "Streaming", url: 'https://www.twitch.tv/ninja' });
                rotate = 3;
            } else if (rotate === 3) {
                random = Math.floor(Math.random() * 7) + 1;
                bot.user.setActivity(`𝐏𝐫𝐨𝐣𝐞𝐜𝐭 𝐗 𝐕𝟑𝐍𝟎𝐌 ⁂`, { type: "Streaming", url: 'https://www.twitch.tv/ninja' });
                rotate = 0;
            }
        }, 10 * 1000)
        message.channel.send(`𝐌𝐮𝐥𝐭𝐢𝐒𝐭𝐫𝐞𝐚𝐦 𝐃𝐞 @${message.author.username}𝐄𝐬𝐭 [𝐎𝐩é𝐫𝐚𝐭𝐢𝐨𝐧𝐧𝐞𝐥𝐥𝐞]💻`)
}

module.exports.help = {
    name: "multistream"
}