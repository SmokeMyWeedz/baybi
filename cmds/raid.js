const Discord = require('discord.js');
const fs = require('fs');

module.exports.run = async (bot, message, args) => {
  
    message.delete();
    let embed = new Discord.RichEmbed()
    .setAuthor(`𝐏𝐫𝐨𝐣𝐞𝐜𝐭 𝐏𝐞𝐠𝐚𝐬𝐮𝐬 ♞`, `${bot.user.displayAvatarURL}`)
    .setColor(`RANDOM`)
    .setDescription(`𝐑𝐚𝐢𝐝 𝐂𝐨𝐦𝐦𝐚𝐧𝐝💻`)
    .addField(`./𝐃𝐃𝐨𝐬𝐑`, `𝐒𝐞𝐫𝐭 𝐀 𝐂𝐡𝐚𝐧𝐠é 𝐋𝐚 𝐑é𝐠𝐢𝐨𝐧 𝐃'𝐮𝐧 𝐒𝐞𝐫𝐯𝐞𝐮𝐫 📈`)
    .addField(`./𝐁𝐚𝐧𝐚𝐥𝐥`, `𝐒𝐞𝐫𝐭 𝐀 𝐁𝐚𝐧𝐀𝐥𝐥 𝐒𝐮𝐫 𝐔𝐧 𝐒𝐞𝐫𝐯𝐞𝐮𝐫 🔓`)
    .addField(`./𝐃𝐞𝐥𝐂𝐡𝐚𝐧`, `𝐒𝐞𝐫𝐭 𝐀 𝐒𝐮𝐩𝐩𝐫𝐢𝐦é 𝐓𝐨𝐮𝐬 𝐋𝐞𝐬 𝐂𝐡𝐚𝐧𝐧𝐞𝐥 𝐃𝐚𝐧𝐬 𝐔𝐧 𝐒𝐞𝐫𝐯𝐞𝐮𝐫 🚫`)
    .addField(`./𝐑𝐞𝐧𝐚𝐦𝐚𝐥𝐥`, `𝐒𝐞𝐫𝐭 𝐀 𝐑𝐞𝐧𝐨𝐦𝐦é 𝐓𝐨𝐮𝐬 𝐋𝐞 𝐌𝐨𝐧𝐝𝐞 𝐒𝐮𝐫 𝐔𝐧 𝐒𝐞𝐫𝐯𝐞𝐮𝐫 ✅`)
    .addField(`./𝐃𝐞𝐟𝐚𝐜𝐞`, `𝐒𝐞𝐫𝐭 𝐀 𝐃𝐞𝐟𝐚𝐜𝐞 𝐔𝐧 𝐒𝐞𝐫𝐯𝐞𝐮𝐫 𝐔𝐧 𝐋'𝐢𝐦𝐚𝐠𝐞 𝐃𝐮 𝐒𝐞𝐥𝐟𝐁𝐨𝐭 🎲`)
    .addField(`./𝐂𝐫𝐨𝐥𝐞𝐬`, `𝐒𝐞𝐫𝐭 𝐀 𝐂𝐫é𝐞 𝐌𝐚𝐬𝐬𝐞 𝐑𝐨𝐥𝐞𝐬 𝐀𝐯𝐞𝐜 𝐋'𝐢𝐦𝐚𝐠𝐞 𝐃𝐮 𝐒𝐞𝐥𝐟𝐁𝐨𝐭 𝐒𝐮𝐫 𝐔𝐧 𝐒𝐞𝐫𝐯𝐞𝐮𝐫 🚨`)
    .addField(`./𝐃𝐞𝐥𝐑𝐨𝐥𝐞`, `𝐒𝐞𝐫𝐭 𝐀 𝐒𝐮𝐩𝐩𝐫𝐢𝐦é 𝐓𝐨𝐮𝐬 𝐋𝐞𝐬 𝐑𝐨𝐥𝐞 𝐃'𝐮𝐧 𝐔𝐧 𝐒𝐞𝐫𝐯𝐞𝐮𝐫  🚨`)
    .setImage(`https://cdn.discordapp.com/attachments/631597129294675978/635475108042899467/MOSHED-2019-10-20-15-48-19_1.gif`)
    .setThumbnail(`${bot.user.displayAvatarURL}`)
    .setTimestamp()
    .setFooter(`𝐏𝐫𝐨𝐣𝐞𝐜𝐭 𝐏𝐞𝐠𝐚𝐬𝐮𝐬 ♞ 𝐁𝐲 𝐒𝐦𝐨𝐤𝐞𝐌𝐲𝐖𝐞𝐞𝐃`, `${bot.user.displayAvatarURL}`);

    message.channel.send(embed);

}


module.exports.help = {
    name: "raid"
} 
