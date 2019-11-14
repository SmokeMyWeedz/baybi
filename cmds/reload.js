const Discord = require('discord.js');
const fs = require('fs');
const path = require('path');
const config = require('./config.json');

module.exports.run = async (bot, message, args) => {
  
    if(message.author.id === bot.user.id)
        message.delete();
      bot.destroy()
                    let men = message.mentions.users.first(); 
        message.channel.send(`**Debut du redémarrage**`).then(message => {
            setTimeout(() => {
                message.edit('**Chargement•** 🔁');
            }, 2000);
            setTimeout(() => {
                message.edit('**Chargement••** 🔁');
            }, 4000);
            setTimeout(() => {
                message.edit('**Chargement•••** 🔁');
            }, 7000);
            setTimeout(() => {
                message.edit('**Redémarrage** 🔂');
            }, 9000);
            setTimeout(() => {
                message.edit('**Redémarrage finis** ✅');
            }, 12000);
            console.log("Redémarrage exécuter avec succès ✅")
            bot.login(config.botToken);
        })
        
        }


module.exports.help = {
    name: "reload"
} 
