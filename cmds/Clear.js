const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    var args = message.content.split(" ").slice(1);
    var messagecount = parseInt(args[0]) || 999;
    var deletedMessages = -1;
    message.channel.fetchMessages({ limit: Math.min(messagecount + 1, 100, 200) })
        .then(messages => {
            messages.forEach(m => { m.delete().catch(console.error); deletedMessages++; });
        }).then(() => {
            if (deletedMessages === -1) deletedMessages = 0;
          
        }).catch(console.error);
       }




module.exports.help = {
  name: "clear"
}