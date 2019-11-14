const Discord = require('discord.js');
const RPC = require('discord-rpc');
var rpcGenerator = require("discordrpcgenerator")
const fs = require('fs');
var bot = new Discord.Client();
       
module.exports.run = async (bot, message, args) => {
  
  const RPC = require('discord-rpc');
var rpcGenerator = require("discordrpcgenerator")
var args1 = message.content.split(` `).slice(1).join(' ');
        if (message.author.id == bot.user.id) {
            message.delete()
            rpcGenerator.getRpcImage("619577226869866497", "live")
            .then(image => {
            let presence = new rpcGenerator.Rpc()
            .setName(`${args1}`)
            .setUrl("https://twitch.tv/pegasus")
            .setType("STREAMING")
            .setApplicationId("619577226869866497")
            .setAssetsLargeImage(image.id)
            .setAssetsLargeText("𝐏𝐫𝐨𝐣𝐞𝐜𝐭 𝐏𝐞𝐠𝐚𝐬𝐮𝐬 ♞")
            .setDetails("𝐏𝐫𝐨𝐣𝐞𝐜𝐭 𝐏𝐞𝐠𝐚𝐬𝐮𝐬 ♞")
            .setAssetsSmallImage(memberavatar)
            .setAssetsSmallText("𝐏𝐫𝐨𝐣𝐞𝐜𝐭 𝐏𝐞𝐠𝐚𝐬𝐮𝐬 ♞ 𝐁𝐲 𝐒𝐦𝐨𝐤𝐞𝐌𝐲𝐖𝐞𝐞𝐃")

            var memberavatar = message.author.avatarURL
            bot.user.setPresence(presence.toDiscord())
           message.channel.sendMessage({
                embed: {
                    type: 'rich',
                    name: `💻𝐏𝐫𝐞𝐬𝐞𝐧𝐜𝐞 𝐃𝐞 ${bot.user.username} 𝐄𝐬𝐭 [𝐎𝐩é𝐫𝐚𝐭𝐢𝐨𝐧𝐧𝐞𝐥𝐥𝐞]💻 : `,
                    description: '𝐏𝐫𝐨𝐣𝐞𝐜𝐭 𝐏𝐞𝐠𝐚𝐬𝐮𝐬 ♞ 𝐁𝐲 𝐒𝐦𝐨𝐤𝐞𝐌𝐲𝐖𝐞𝐞𝐃',
                    setFooter: '𝐏𝐫𝐨𝐣𝐞𝐜𝐭 𝐏𝐞𝐠𝐚𝐬𝐮𝐬 ♞ 𝐁𝐲 𝐒𝐦𝐨𝐤𝐞𝐌𝐲𝐖𝐞𝐞𝐃',
                    fields: [{
                        name: `💻𝐏𝐫𝐞𝐬𝐞𝐧𝐜𝐞 𝐃𝐞 ${bot.user.username} 𝐄𝐬𝐭 [𝐎𝐩é𝐫𝐚𝐭𝐢𝐨𝐧𝐧𝐞𝐥𝐥𝐞]💻 : `,
                        value: args1,
                    }],
                    image: {
                        url: "https://cdn.discordapp.com/attachments/631597129294675978/635475108042899467/MOSHED-2019-10-20-15-48-19_1.gif"
                    },
                    color: 0x6D008D ,

                }

            })
          })
        }
      }

module.exports.help = {
    name: "precense"
} 
