const Discord = require('discord.js');
const fs = require('fs');

module.exports.run = async (bot, message, args) => {
  
    message.delete();
    let embed = new Discord.RichEmbed()
    .setAuthor(`𝐏𝐫𝐨𝐣𝐞𝐜𝐭 𝐏𝐞𝐠𝐚𝐬𝐮𝐬 ♞`, `${bot.user.displayAvatarURL}`)
    .setColor(`RANDOM`)
    .setDescription(`𝐒𝐭𝐚𝐭𝐮𝐞 𝐂𝐨𝐦𝐦𝐚𝐧𝐝💻`)
    .addField(`./𝐦𝐮𝐥𝐭𝐢𝐬𝐭𝐫𝐞𝐚𝐦`, `𝐒𝐞𝐫𝐭 𝐀 𝐀𝐯𝐨𝐢𝐫 𝐔𝐧 𝐌𝐮𝐥𝐭𝐢𝐒𝐭𝐫𝐞𝐚𝐦💻 𝐃𝐮 𝐏𝐫𝐨𝐣𝐞𝐜𝐭 𝐏𝐞𝐠𝐚𝐬𝐮𝐬 ♞`)
    .addField(`./𝐦𝐮𝐥𝐭𝐢𝐬𝐭𝐚𝐭𝐮𝐞`, `𝐒𝐞𝐫𝐭 𝐀 𝐀𝐯𝐨𝐢𝐫 𝐔𝐧 𝐌𝐮𝐥𝐭𝐢𝐒𝐭𝐚𝐭𝐮𝐞𝐬💻`)
    .addField(`./𝐫𝐞𝐬𝐞𝐭`, `𝐒𝐞𝐫𝐭 𝐀 𝐑𝐞𝐢𝐧𝐢𝐭𝐢𝐚𝐥𝐢𝐬𝐞𝐫 𝐒𝐨𝐧 𝐒𝐭𝐚𝐭𝐮𝐞 𝐃𝐞 𝐉𝐞𝐮𝐱💻`)
    .addField(`./𝐬𝐭𝐫𝐞𝐚𝐦`, `𝐒𝐞𝐫𝐭 𝐀 𝐌𝐞𝐭𝐭𝐫𝐞 𝐀 𝐉𝐨𝐮𝐫 𝐕𝐨𝐭𝐫𝐞 𝐒𝐭𝐫𝐞𝐚𝐦𝐢𝐧𝐠 𝐒𝐮𝐫 𝐃𝐢𝐬𝐜𝐨𝐫𝐝💻 `)
    .addField(`./𝐏𝐫𝐞𝐜𝐞𝐧𝐬𝐞`, `𝐒𝐞𝐫𝐭 𝐀 𝐌𝐞𝐭𝐭𝐫𝐞 𝐀 𝐉𝐨𝐮𝐫 𝐕𝐨𝐭𝐫𝐞 𝐏𝐫𝐞𝐜𝐞𝐧𝐬𝐞 𝐒𝐭𝐫𝐞𝐚𝐦𝐢𝐧𝐠 𝐒𝐮𝐫 𝐃𝐢𝐬𝐜𝐨𝐫𝐝💻`)
    .addField(`./𝐏𝐥𝐚𝐲`, `𝐒𝐞𝐫𝐭 𝐀 𝐌𝐞𝐭𝐭𝐫𝐞 𝐀 𝐉𝐨𝐮𝐫 𝐕𝐨𝐭𝐫𝐞 𝐉𝐞𝐮𝐱 𝐒𝐮𝐫 𝐃𝐢𝐬𝐜𝐨𝐫𝐝💻`)
    .setImage(`https://cdn.discordapp.com/attachments/631597129294675978/635475108042899467/MOSHED-2019-10-20-15-48-19_1.gif`)
    .setThumbnail(`${bot.user.displayAvatarURL}`)
    .setTimestamp()
    .setFooter(`𝐏𝐫𝐨𝐣𝐞𝐜𝐭 𝐏𝐞𝐠𝐚𝐬𝐮𝐬 ♞ 𝐁𝐲 𝐒𝐦𝐨𝐤𝐞𝐌𝐲𝐖𝐞𝐞𝐃`, `${bot.user.displayAvatarURL}`);

    message.channel.send(embed);

}


module.exports.help = {
    name: "statue"
} 
