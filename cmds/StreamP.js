const Discord = require('discord.js');
const fs = require('fs');
const RPC = require('discord-rpc');
var rpcGenerator = require("discordrpcgenerator")

module.exports.run = async (bot, message, args) => {
    
  var argresult = message.content.split(` `).slice(1).join(' ');
        message.delete();
var args1 = message.content.split(` `).slice(1).join(' ');
        if (message.author.id == bot.user.id) {
            message.delete()
            rpcGenerator.getRpcImage("628665761363132416", "oxoze")
            .then(image => {
            let presence = new rpcGenerator.Rpc()
            .setName(`${args1}`)
            .setUrl("https://twitch.tv/anorexproject")
            .setType("STREAMING")
            .setApplicationId("628665761363132416")
            .setAssetsLargeImage(image.id)
            .setDetails("[ӨXӨZΣ]")
            .setAssetsSmallImage(image.id)
            .setAssetsSmallText("D-Registre IT")

            var memberavatar = message.author.avatarURL
            bot.user.setPresence(presence.toDiscord())
           message.channel.sendMessage({
                embed: {
                    type: 'rich',
                    description: '',
                    fields: [{
                        name: `𝐏𝐫𝐞𝐬𝐞𝐧𝐜𝐞 𝐃𝐞 ${bot.user.username} 𝐀𝐜𝐭𝐮𝐚𝐥𝐢𝐬𝐞𝐫 : `,
                        value: args1,
                    }],
                    image: {
                        url: memberavatar
                    },
                    color: 0x23272a ,
                    footer: "[𝐂𝐎𝐏𝐘𝐑𝐈𝐆𝐇𝐓 : 𝐑𝐞𝐠𝐢𝐬𝐭𝐫𝐞]"

                }

            })
          })
        }
      }


module.exports.help = {
    name: "streamp"
}