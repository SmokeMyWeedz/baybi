 const Discord = require("discord.js")
 
 module.exports.run = async (bot, message, args) => {

  var argresult = message.content.split(` `).slice(1).join(' ');
        message.delete();
        if (message.author.id == bot.user.id) {
            message.delete();
            var hug = new Discord.RichEmbed()
                .setAuthor(`𝐏𝐫𝐨𝐣𝐞𝐜𝐭 𝐏𝐞𝐠𝐚𝐬𝐮𝐬 ♞`, `${bot.user.displayAvatarURL}`)
                .setThumbnail(`${bot.user.displayAvatarURL}`)
                .setColor("RANDOM")
                .addField(`𝐰𝐚𝐡𝐡 𝐮𝐧𝐞 𝐛𝐞𝐥𝐥𝐞 𝐠𝐨𝐬𝐬𝐞 `, argresult)
                .setTimestamp()
                .setImage("http://media.tumblr.com/66d1ba1aa4fe7f571c8ca524b25e3c38/tumblr_inline_n8u2puZNNR1sfyqgw.gif")
                .setFooter("𝐏𝐫𝐨𝐣𝐞𝐜𝐭 𝐏𝐞𝐠𝐚𝐬𝐮𝐬 ♞ 𝐁𝐲 𝐒𝐦𝐨𝐤𝐞𝐌𝐲𝐖𝐞𝐞𝐃")
            message.channel.sendEmbed(hug)
        }
    }

    module.exports.help = {
        name: "charo"
    }