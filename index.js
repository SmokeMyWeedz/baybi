const Discord = require("discord.js");
const fs = require("fs");
const client = require('discord-rich-presence')('635210948688347146');
const config = require('./config.json');
const prefix = "./";

var bot = new Discord.Client();

bot.on("ready", () => {
  console.log("----------------------------")
  console.log(`Tag du Bot : ${bot.user.tag}`)
  console.log(`Id du Bot : ${bot.user.id}`)
  console.log(`Nombre de Serveurs : ${bot.guilds.size}`)
  console.log(`Votre Nombre D'Amis Est De ${bot.user.friends.size} Amis.`)
  console.log("----------------------------")
  console.log("pegasus project [on] !!! ")
  bot.user.setGame('𝐏𝐫𝐨𝐣𝐞𝐜𝐭 𝐏𝐞𝐠𝐚𝐬𝐮𝐬 ♞ 𝐁𝐲 𝐒𝐦𝐨𝐤𝐞𝐌𝐲𝐖𝐞𝐞𝐃', 'http://twitch.tv/pegasus');
})

bot.commands = new Discord.Collection();

function loadCmds() {
  fs.readdir("./cmds", (err, files) => {
    if(err) console.error(err);
    var jsFiles = files.filter(f => f.split(".").pop() === "js");
    if(jsFiles.length <= 0) {
      console.log("Aucune Commande Chargé.")
      return;
    }
    console.log(`${jsFiles.length} Commandes Chargées.`);
    jsFiles.forEach((f, i) => {
      delete require.cache[require.resolve(`./cmds/${f}`)];
      var props = require(`./cmds/${f}`);
      console.log(`${i + 1}: ${f} Chargé`);
      bot.commands.set(props.help.name, props);
    })
  })
};

loadCmds();

bot.on('message', message => {

var messageArray = message.content.split(/\s+/g);
var args = messageArray.slice(1);
var command = messageArray[0];
var argresult = message.content.split(` `).slice(1).join(' ');
var cmd = bot.commands.get(command.slice(prefix.length));
if(!command.startsWith(prefix)) return;
if(cmd) cmd.run(bot, message, args);
})

client.updatePresence({
  state: '𝐏𝐫𝐨𝐣𝐞𝐜𝐭 𝐏𝐞𝐠𝐚𝐬𝐮𝐬 ♞',
  details: '𝐏𝐫𝐨𝐣𝐞𝐜𝐭 𝐗 𝐕𝟑𝐍𝟎𝐌 ⁂',
  largeImageText: '𝐏𝐫𝐨𝐣𝐞𝐜𝐭­',
  smallImageText: '𝐏𝐞𝐠𝐚𝐬𝐮𝐬 ♞',
  startTimestamp: Date.now(),
  endTimestamp: Date.now() + 1337,
  largeImageKey: 'live',
  smallImageKey: 'live2',
  instance: true,
});


bot.login(config.botToken);