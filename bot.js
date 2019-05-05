const Discord = require("discord.js");
const client = new Discord.Client();


if (command === 'say') {
    let say = args.join(' ');
    msg.delete();
    if(!msg.member.permissions.has('ADMINISTRATION') ) return msg.reply('**YOU CANT USE THIS COMMAND !')
    msg.channel.send(say);
}

client.login("NTU1NzE1ODA3NjExNDUzNDQy.XM4p6A.FmkFB7_bEgGGgUbuDuhGoMZ9YA4");
