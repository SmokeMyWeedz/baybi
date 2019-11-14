const Discord = require('discord.js');
const fs = require('fs');

module.exports.run = async (bot, message, args) => {
  
    message.delete();
    let embed = new Discord.RichEmbed()
    .setAuthor(`𝐏𝐫𝐨𝐣𝐞𝐜𝐭 𝐏𝐞𝐠𝐚𝐬𝐮𝐬 ♞`, `${bot.user.displayAvatarURL}`)
    .setColor(`RANDOM`)
    .setDescription(`𝐅𝐮𝐧 𝐂𝐨𝐦𝐦𝐚𝐧𝐝🎉`)
    .addField(`./𝐏𝐢𝐧𝐠`, `𝐒𝐞𝐫𝐭 𝐀 𝐒𝐚𝐯𝐨𝐢𝐫 𝐕𝐨𝐭𝐫𝐞 𝐏𝐢𝐧𝐠 𝐒𝐮𝐫 𝐃𝐢𝐬𝐜𝐨𝐫𝐝📈`)
    .addField(`./𝟖𝐛𝐚𝐥𝐥`, `𝐔𝐧 𝟖𝐁𝐚𝐥𝐥 𝐂𝐥𝐚𝐬𝐬𝐢𝐪𝐮𝐞 𝐀𝐯𝐞𝐜 𝐃𝐞𝐬 𝐑𝐞𝐩𝐞𝐧𝐬𝐞 𝐑𝐚𝐧𝐝𝐨𝐦🤡`)
    .addField(`./𝐌𝐜𝐠𝐞𝐭`, `𝐀𝐟𝐟𝐢𝐜𝐡é 𝐔𝐧 𝐒𝐮𝐜𝐜è𝐬 𝐌𝐢𝐧𝐞𝐜𝐫𝐚𝐟𝐭 𝐏𝐞𝐫𝐬𝐨𝐧𝐧𝐚𝐥𝐢𝐬é 🌲`)
    .setImage(`https://cdn.discordapp.com/attachments/631597129294675978/635475108042899467/MOSHED-2019-10-20-15-48-19_1.gif`)
    .setThumbnail(`${bot.user.displayAvatarURL}`)
    .setTimestamp()
    .setFooter(`𝐏𝐫𝐨𝐣𝐞𝐜𝐭 𝐏𝐞𝐠𝐚𝐬𝐮𝐬 ♞ 𝐁𝐲 𝐒𝐦𝐨𝐤𝐞𝐌𝐲𝐖𝐞𝐞𝐃`, `${bot.user.displayAvatarURL}`);

    message.channel.send(embed);

}


module.exports.help = {
    name: "fun"
} 
