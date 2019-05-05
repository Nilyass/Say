const Discord = require("discord.js");
const client = new Discord.Client();
const embed = new Discord.RichEmbed()
const prefix = "!"

client.on('message', message => {
  let args = message.content.split(" ").slice(1);
 
  if(message.content.startsWith(prefix + "say"))  {
         message.delete()
         const embed = new Discord.RichEmbed()
         .setDescription(args.join(" "))
         .setColor(RANDOM)
    message.channel.sendEmbed(embed);
 
     }
 
});

client.login("NTU1NzE1ODA3NjExNDUzNDQy.XM4p6A.FmkFB7_bEgGGgUbuDuhGoMZ9YA4");
