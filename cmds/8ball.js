 const Discord = require("discord.js")
 
 module.exports.run = async (bot, message, args) => {

    //!8ball question
    if(!args[1]) return message.reply("Svp entrer une question complète avec 2 mots ou plus!");
    let replies = ["Oui", "Non", "Je Ne Sais Pas", "pose moi la question plus tard !", "Viktourr !!!", "Je Ne Suis Pas Sur!", "Svp Non", "Tu Mas Posé Une Question??", "Sans Doute", "Probablement Non !! ", "T'es Qui Fdp", ];

    let result = Math.floor((Math.random() * replies.length));
    let question = args.join(" ");

    let ballembed = new Discord.RichEmbed()
     
    .setAuthor(`𝐏𝐫𝐨𝐣𝐞𝐜𝐭 𝐏𝐞𝐠𝐚𝐬𝐮𝐬 ♞`)
    .setThumbnail(`${bot.user.displayAvatarURL}`)
    .setColor("RANDOM")
    .addField("𝐐𝐮𝐞𝐬𝐭𝐢𝐨𝐧", question)
    .addField("𝐑𝐞𝐩𝐨𝐧𝐬𝐞 ", replies[result])
    .setFooter("𝐏𝐫𝐨𝐣𝐞𝐜𝐭 𝐏𝐞𝐠𝐚𝐬𝐮𝐬 ♞ 𝐁𝐲 𝐒𝐦𝐨𝐤𝐞𝐌𝐲𝐖𝐞𝐞𝐃")

    message.channel.send(ballembed)

    message.delete();


 }

    module.exports.help = {
        name: "8ball"
    }