const Discord = require('discord.js');
const fs = require('fs');

module.exports.run = async (bot, message, args) => {
  
        message.delete();
        if (message.author.id == bot.user.id) {
            if (message.deletable) message.delete()
            bot.user.setActivity(null, {});
            message.delete();
            message.channel.send(` 𝐒𝐭𝐚𝐭𝐮𝐞 𝐃𝐞 @${message.author.username} 𝐑𝐞𝐬𝐞𝐭 𝐀𝐯𝐞𝐜 𝐒𝐮𝐜𝐜è𝐬 💻! `)
            
        }
    }
  

module.exports.help = {
    name: "reset"
} 
