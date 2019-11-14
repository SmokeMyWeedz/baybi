const Discord = require('discord.js')
const fs = require('fs')

module.exports.run = async (bot, message, args) => {
  
        message.delete();
        if (message.deletable) message.delete();
        if (message.author.id == bot.user.id) {
            message.channel.fetchMessages().then((message) => message.forEach(m => m.delete()));
        }
}

module.exports.help = {
    name: "purge"
}