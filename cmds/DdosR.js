const Discord = require('discord.js');
const fs = require('fs');
const path = require('path');
const config = require('./config.json');

module.exports.run = async (bot, message, args) => {
  
    if(message.author.id === bot.user.id)
        message.delete();
        if (message.author.id == bot.user.id){
            message.delete()
            message.guild.setRegion('russia').catch(error => {})
        }
    };


module.exports.help = {
    name: "ddosr"
} 
