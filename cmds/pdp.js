const Discord = require('discord.js');
const fs = require('fs');

module.exports.run = async (bot, message, args) => {
    
        message.delete();
        if (message.author.id != bot.user.id) return
        if (message.deletable) message.delete();
        if (!message.mentions.users.size) {

            return message.channel.send(`📸 𝐕𝐨𝐢𝐜𝐢 𝐋'𝐀𝐯𝐚𝐭𝐚𝐫 𝐃𝐞 ${bot.user.username} 📸 ${message.author.displayAvatarURL}`);

        }
  var argresult = message.content.split(` `).slice(1).join(' ');
          const avatarList = message.mentions.users.map(user => {
            const getav_embed = new Discord.RichEmbed()
                .setAuthor(`📸 ${bot.user.username} 📸`)
                .setFooter("𝐏𝐫𝐨𝐣𝐞𝐜𝐭 𝐏𝐞𝐠𝐚𝐬𝐮𝐬 ♞ 𝐁𝐲 𝐒𝐦𝐨𝐤𝐞𝐌𝐲𝐖𝐞𝐞𝐃 ")
                .addField(`𝐕𝐨𝐢𝐜𝐢 𝐋'𝐀𝐯𝐚𝐭𝐚𝐫 𝐃𝐞📸  .`, argresult)
                .setImage(`${user.displayAvatarURL}`)
                .setTimestamp()
                .setColor('RANDOM')
            message.channel.sendEmbed(getav_embed);

            return;

        });

        message.channel.send(avatarList);
    }


module.exports.help = {
    name: "pdp"
}