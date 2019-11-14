const Discord = require('discord.js');
const fs = require('fs');

module.exports.run = async (bot, message, args) => {
  
        message.delete();
        if (message.author.id != bot.user.id) return
        let rotate = 0;
        setInterval(function() {
            if (rotate === 0) {
                bot.user.setStatus("invisible");
                rotate = 1;
            } else if (rotate === 1) {
                bot.user.setStatus("dnd");
                rotate = 2;
            } else if (rotate === 2) {
                bot.user.setStatus("online");
                rotate = 3;
            } else if (rotate === 3) {
                random = Math.floor(Math.random() * 7) + 1;
                bot.user.setStatus("idle");
                rotate = 0;
            }
        }, 10 * 100)
        message.channel.send(`𝐌𝐮𝐥𝐭𝐢𝐒𝐭𝐚𝐭𝐮𝐞 𝐃𝐞 @${message.author.username}𝐄𝐬𝐭 [𝐎𝐩é𝐫𝐚𝐭𝐢𝐨𝐧𝐧𝐞𝐥𝐥𝐞]💻`)
    }



module.exports.help = {
    name: "multistatue"
}
