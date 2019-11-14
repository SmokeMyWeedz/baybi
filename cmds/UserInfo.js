const Discord = require("discord.js");

module.exports.run =async (bot, message, args) => {
    let inline = true
    let resence = true
    const status = {
        online: "<:online:424890369688469504> Online",
        idle: "<:idle:424890472855502849> Idle",
        dnd: "<:dnd:424890429524410368> Do Not Disturb",
        offline: "<:offilne:424890400319340546> Offline/Invisible"
      }
        
const member = message.mentions.members.first() || message.guild.members.get(args[0]) || message.member;
let target = message.mentions.users.first() || message.author

if (member.user.bot === true) {
    bot = "<:bottag:425631858265423883> Yes";
  } else {
    bot = "<:user:424958082691629057> No";
  }

            let embed = new Discord.RichEmbed()
                //.setAuthor(member.user.username)
                .setThumbnail((target.displayAvatarURL))
                .setAuthor(`𝐏𝐫𝐨𝐣𝐞𝐜𝐭 𝐏𝐞𝐠𝐚𝐬𝐮𝐬 ♞`)
                .setColor("RANDOM")
                .addField("𝐏𝐬𝐮𝐞𝐝𝐨", `${member.user.tag}`, inline)
                .addField("𝐈𝐃", member.user.id, inline)
                .addField("𝐍𝐢𝐜𝐤𝐧𝐚𝐦𝐞", `${member.nickname !== null ? `<:yes:425632265993846795> Nickname: ${member.nickname}` : "<:no:425632070036094986> None"}`, true)
                .addField("𝐁𝐨𝐭", `${bot}`,inline, true)
                .addField("𝐄𝐦𝐚𝐢𝐥 ", `${member.user.email}`,inline)
                .addField("𝐒𝐭𝐚𝐭𝐮𝐞𝐬 ", `${status[member.user.presence.status]}`, inline, true)
                .addField("𝐉𝐨𝐮𝐞 𝐀", `${member.user.presence.game ? `🎮 ${member.user.presence.game.name}` : "<:no:425632070036094986> Not playing"}`,inline, true)
                .addField("𝐑𝐨𝐥𝐞", `${member.roles.filter(r => r.id !== message.guild.id).map(roles => `\`${roles.name}\``).join(" **|** ") || "<:no:425632070036094986> No Roles"}`, true)
                .addField("𝐃𝐚𝐭𝐞 𝐃𝐞 𝐋𝐚 𝐂𝐫é𝐚𝐭𝐢𝐨𝐧 𝐃𝐮 𝐂𝐨𝐦𝐩𝐭𝐞 ", member.user.createdAt)
                .addField(`𝐈𝐧𝐟𝐨𝐫𝐦𝐚𝐭𝐢𝐨𝐧 𝐃𝐞  ${member.user.username}`)
                .setFooter("𝐏𝐫𝐨𝐣𝐞𝐜𝐭 𝐏𝐞𝐠𝐚𝐬𝐮𝐬 ♞ 𝐁𝐲 𝐒𝐦𝐨𝐤𝐞𝐌𝐲𝐖𝐞𝐞𝐃")
                .setTimestamp()
    
            message.channel.send(embed);

            message.delete();
    }

    module.exports.help = {
        name: "userinfo"
    }
