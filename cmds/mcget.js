 const Discord = require("discord.js")
 
 module.exports.run = async (bot, message, args) => {

  var argresult = message.content.split(` `).slice(1).join(' ');
   var mcget = message.content.split(` `).slice(2).join(' ');
        message.delete();
        if (message.author.id == bot.user.id) {
            message.delete();
            var argresult = message.content.split(` `).slice(1).join(' ');
            var mcget = message.content.split(` `).slice(2).join(' ');
            var punch = new Discord.RichEmbed()
                .setAuthor(`𝐏𝐫𝐨𝐣𝐞𝐜𝐭 𝐏𝐞𝐠𝐚𝐬𝐮𝐬 ♞`, `${bot.user.displayAvatarURL}`)
                .setThumbnail(`${bot.user.displayAvatarURL}`)
                .setColor("RANDOM")
                .addField(`${message.author.username} 𝐕𝐨𝐢𝐥𝐚 𝐕𝐨𝐭𝐫𝐞 𝐀𝐜𝐡𝐢𝐞𝐯𝐞𝐦𝐞𝐧𝐭 𝐏𝐞𝐫𝐬𝐨𝐧𝐧𝐚𝐥𝐢𝐬é `)
                .setTimestamp()
                .setImage("https://minecraftskinstealer.com/achievement/5/(mcget)/(argresult)")
                .setFooter("𝐏𝐫𝐨𝐣𝐞𝐜𝐭 𝐏𝐞𝐠𝐚𝐬𝐮𝐬 ♞ 𝐁𝐲 𝐒𝐦𝐨𝐤𝐞𝐌𝐲𝐖𝐞𝐞𝐃")
            message.channel.sendEmbed(punch)
        }
    }

    module.exports.help = {
        name: "mcget"
    }