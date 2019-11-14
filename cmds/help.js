const Discord = require('discord.js');
const fs = require('fs');

module.exports.run = async (bot, message, args) => {
  
    message.delete();
    let embed = new Discord.RichEmbed()
    .setAuthor(`𝐏𝐫𝐨𝐣𝐞𝐜𝐭 𝐏𝐞𝐠𝐚𝐬𝐮𝐬 ♞`, `${bot.user.displayAvatarURL}`)
    .setColor(`RANDOM`)
    .setDescription(`𝐇𝐞𝐥𝐩 𝐂𝐨𝐦𝐦𝐚𝐧𝐝𝐬📝`)
    .addField(`./𝐇𝐞𝐥𝐩`, `𝐀𝐟𝐟𝐢𝐜𝐡𝐞 𝐋𝐞 𝐇𝐞𝐥𝐩 𝐃𝐮 𝐏𝐫𝐨𝐣𝐞𝐜𝐭 𝐏𝐞𝐠𝐚𝐬𝐮𝐬 ♞📝`)
    .addField(`./𝐅𝐮𝐧`, `𝐀𝐟𝐟𝐢𝐜𝐡𝐞 𝐋𝐞𝐬 𝐂𝐨𝐦𝐦𝐚𝐧𝐝 𝐅𝐮𝐧 𝐃𝐮 𝐏𝐫𝐨𝐣𝐞𝐜𝐭 𝐏𝐞𝐠𝐚𝐬𝐮𝐬 ♞🎉`)
    .addField(`./𝐎𝐮𝐭𝐢𝐥`, `𝐀𝐟𝐟𝐢𝐜𝐡𝐞 𝐋𝐞𝐬 𝐂𝐨𝐦𝐦𝐚𝐧𝐝 𝐔𝐭𝐢𝐥𝐞 𝐃𝐮 𝐏𝐫𝐨𝐣𝐞𝐜𝐭 𝐏𝐞𝐠𝐚𝐬𝐮𝐬 ♞🛠️`)
    .addField(`./𝐆𝐢𝐟`, `𝐀𝐟𝐟𝐢𝐜𝐡𝐞 𝐋𝐞𝐬 𝐆𝐢𝐟 𝐃𝐮 𝐏𝐫𝐨𝐣𝐞𝐜𝐭 𝐏𝐞𝐠𝐚𝐬𝐮𝐬 ♞🖼️`)
    .addField(`./𝐒𝐭𝐚𝐭𝐮𝐞`, `𝐀𝐟𝐟𝐢𝐜𝐡𝐞 𝐋𝐞𝐬 𝐂𝐨𝐦𝐦𝐚𝐧𝐝 𝐒𝐭𝐚𝐭𝐮𝐞 𝐃𝐮 𝐏𝐫𝐨𝐣𝐞𝐜𝐭 𝐏𝐞𝐠𝐚𝐬𝐮𝐬 ♞💻`)
    .addField(`./𝐑𝐚𝐢𝐝`, `𝐀𝐟𝐟𝐢𝐜𝐡𝐞 𝐋𝐞𝐬 𝐂𝐨𝐦𝐦𝐚𝐧𝐝 𝐑𝐚𝐢𝐝 𝐃𝐮 𝐏𝐫𝐨𝐣𝐞𝐜𝐭 𝐏𝐞𝐠𝐚𝐬𝐮𝐬 ♞💻`)
    .setImage(`https://cdn.discordapp.com/attachments/631597129294675978/635475108042899467/MOSHED-2019-10-20-15-48-19_1.gif`)
    .setThumbnail(`${bot.user.displayAvatarURL}`)
    .setTimestamp()
    .setFooter(`𝐏𝐫𝐨𝐣𝐞𝐜𝐭 𝐏𝐞𝐠𝐚𝐬𝐮𝐬 ♞ 𝐁𝐲 𝐒𝐦𝐨𝐤𝐞𝐌𝐲𝐖𝐞𝐞𝐃 `, `${bot.user.displayAvatarURL}`);

    message.channel.send(embed);

}


module.exports.help = {
    name: "help"
} 
