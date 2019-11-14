const Discord = require('discord.js');
const fs = require('fs');

module.exports.run = async (bot, message, args) => {
  
    message.delete();
  var game = args.join(" ").trim();
  if(!game || game.length < 1) game = null;
  bot.user.setGame(game);
  message.delete().catch(console.error);
}



module.exports.help = {
    name: "play"
} 
