const Discord = require('discord.js');
const fs = require('fs');

module.exports.run = async (bot, message, args) => {
  
    message.delete();
    let embed = new Discord.RichEmbed()
    .setAuthor(`𝐏𝐫𝐨𝐣𝐞𝐜𝐭 𝐏𝐞𝐠𝐚𝐬𝐮𝐬 ♞`, `${bot.user.displayAvatarURL}`)
    .setColor(`RANDOM`)
    .setDescription(`𝐎𝐮𝐭𝐢𝐥 𝐂𝐨𝐦𝐦𝐚𝐧𝐝𝐬🛠️`)
    .addField(`./𝐩𝐮𝐫𝐠𝐞`, `𝐒𝐮𝐩𝐩𝐫𝐢𝐦é 𝐓𝐨𝐮𝐬 𝐕𝐨𝐮𝐬 𝐌𝐞𝐬𝐬𝐚𝐠𝐞🗑️`)
    .addField(`./𝐄𝐦𝐛𝐞𝐝`, `𝐄𝐧𝐯𝐨𝐲é 𝐔𝐧 𝐌𝐞𝐬𝐬𝐚𝐠𝐞 𝐄𝐧 𝐄𝐦𝐛𝐞𝐝📜`)
    .addField(`./𝐔𝐬𝐞𝐫𝐈𝐧𝐟𝐨`, `𝐒𝐞𝐫𝐭 𝐀 𝐀𝐯𝐨𝐢𝐫 𝐋𝐞𝐬 𝐈𝐧𝐟𝐨𝐫𝐦𝐚𝐭𝐢𝐨𝐧 𝐃𝐞 𝐁𝐚𝐬𝐞 𝐒𝐮𝐫 𝐔𝐧𝐞 𝐏𝐞𝐫𝐬𝐨𝐧𝐧𝐞🗒️`)
    .addField(`./𝐂𝐥𝐞𝐚𝐫`, `𝐒𝐮𝐩𝐩𝐫𝐢𝐦é 𝐔𝐧 𝐍𝐨𝐦𝐛𝐫𝐞 𝐃é𝐟𝐢𝐧𝐢 𝐃𝐞 𝐌𝐞𝐬𝐬𝐚𝐠𝐞🗑️`)
    .addField(`./𝐩𝐝𝐩`, `𝐒𝐞𝐫𝐭 𝐀 𝐀𝐯𝐨𝐢𝐫 𝐋𝐚 𝐏𝐡𝐨𝐭𝐨 𝐃𝐞 𝐏𝐫𝐨𝐟𝐢𝐥 𝐃'𝐮𝐧 𝐔𝐭𝐢𝐥𝐢𝐬𝐚𝐭𝐞𝐮𝐫 𝐃𝐢𝐬𝐜𝐨𝐫𝐝 📸`)
    .addField(`./𝐑𝐞𝐥𝐨𝐚𝐝`, `𝐒𝐞𝐫𝐭 𝐀 𝐑𝐞𝐥𝐨𝐚𝐝 𝐋𝐞 𝐒𝐞𝐥𝐟𝐁𝐨𝐭 🔄`)
    .addField(`./𝐒𝐞𝐫𝐜𝐡𝐞`, `𝐒𝐞𝐫𝐭 𝐀 𝐅𝐚𝐢𝐫𝐞 𝐔𝐧𝐞 𝐑𝐞𝐜𝐡𝐞𝐫𝐜𝐡𝐞 𝐆𝐨𝐨𝐠𝐥𝐞 📤`)
    .setImage(`https://cdn.discordapp.com/attachments/631597129294675978/635475108042899467/MOSHED-2019-10-20-15-48-19_1.gif`)
    .setThumbnail(`${bot.user.displayAvatarURL}`)
    .setTimestamp()
    .setFooter(`𝐏𝐫𝐨𝐣𝐞𝐜𝐭 𝐏𝐞𝐠𝐚𝐬𝐮𝐬 ♞ 𝐁𝐲 𝐒𝐦𝐨𝐤𝐞𝐌𝐲𝐖𝐞𝐞𝐃 `, `${bot.user.displayAvatarURL}`);

    message.channel.send(embed);

}


module.exports.help = {
    name: "outil"
} 
