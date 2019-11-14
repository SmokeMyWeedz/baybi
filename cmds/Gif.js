const Discord = require('discord.js');
const fs = require('fs');

module.exports.run = async (bot, message, args) => {
  
    message.delete();
    let embed = new Discord.RichEmbed()
    .setAuthor(`𝐏𝐫𝐨𝐣𝐞𝐜𝐭 𝐏𝐞𝐠𝐚𝐬𝐮𝐬 ♞`, `${bot.user.displayAvatarURL}`)
    .setColor(`RANDOM`)
    .setDescription(`𝐆𝐢𝐟 𝐂𝐨𝐦𝐦𝐚𝐧𝐝𝐬🖼️`)
    .addField(`./𝐯𝐞𝐬𝐤𝐢`, `𝐀𝐟𝐟𝐢𝐜𝐡𝐞 𝐮𝐧 𝐆𝐢𝐟 𝐝𝐞 𝐕𝐞𝐬𝐤𝐢😓`)
    .addField(`./𝐜𝐡𝐚𝐫𝐨`, `𝐀𝐟𝐟𝐢𝐜𝐡𝐞 𝐮𝐧 𝐆𝐢𝐟 𝐝𝐞 𝐂𝐡𝐚𝐫𝐨🤵`)
    .addField(`./𝐁𝐢𝐟𝐟𝐥𝐞`, `𝐀𝐟𝐟𝐢𝐜𝐡𝐞 𝐮𝐧 𝐆𝐢𝐟 𝐝𝐞 𝐁𝐢𝐟𝐟𝐥𝐞💪`)
    .addField(`./𝐤𝐢𝐬𝐬`, `𝐀𝐟𝐟𝐢𝐜𝐡𝐞 𝐮𝐧 𝐆𝐢𝐟 𝐝𝐞 𝐤𝐢𝐬𝐬💋`)
    .addField(`./𝐡𝐮𝐠`, `𝐀𝐟𝐟𝐢𝐜𝐡𝐞 𝐮𝐧 𝐆𝐢𝐟 𝐝𝐞 𝐡𝐮𝐠👄`)
    .addField(`./𝐩𝐮𝐧𝐜𝐡`, `𝐀𝐟𝐟𝐢𝐜𝐡𝐞 𝐮𝐧 𝐆𝐢𝐟 𝐝𝐞 𝐩𝐮𝐧𝐜𝐡👊 𝐩𝐮𝐧𝐜𝐡/𝐩𝐮𝐧𝐜𝐡𝟐/𝐩𝐮𝐧𝐜𝐡𝟑`)
    .addField(`./𝐓𝐚𝐫𝐭𝐞`, `𝐀𝐟𝐟𝐢𝐜𝐡𝐞 𝐮𝐧 𝐆𝐢𝐟 𝐝𝐞 𝐓𝐚𝐫𝐭𝐞👊`)
    .addField(`./𝐕𝐢𝐤𝐭𝐨𝐮𝐫`, `𝐀𝐟𝐟𝐢𝐜𝐡𝐞 𝐮𝐧 𝐆𝐢𝐟 𝐝𝐞 𝐕𝐢𝐤𝐭𝐨𝐮𝐫👺`)
    .addField(`./𝐈𝐥𝐨𝐯𝐞`, `𝐀𝐟𝐟𝐢𝐜𝐡𝐞 𝐮𝐧 𝐆𝐢𝐟 𝐝𝐞 𝐈 𝐥𝐨𝐯𝐞 𝐲𝐨𝐮💗`)
    .setImage(`https://cdn.discordapp.com/attachments/631597129294675978/635475108042899467/MOSHED-2019-10-20-15-48-19_1.gif`)
    .setThumbnail(`${bot.user.displayAvatarURL}`)
    .setTimestamp()
    .setFooter(`𝐏𝐫𝐨𝐣𝐞𝐜𝐭 𝐏𝐞𝐠𝐚𝐬𝐮𝐬 ♞ 𝐁𝐲 𝐒𝐦𝐨𝐤𝐞𝐌𝐲𝐖𝐞𝐞𝐃 `, `${bot.user.displayAvatarURL}`);

    message.channel.send(embed);

}


module.exports.help = {
    name: "Gif"
} 
