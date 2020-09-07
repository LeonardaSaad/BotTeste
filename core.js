const Discord = require("discord.js");
const client = new Discord.Client();

const prefix = "!";
const commands = require("./scripts/commandsReader.js")(prefix);

console.log(commands);

client.on("ready",() =>{
    console.log(`Logado com o bot ${client.user.tag}`);
});

client.on("message",(msg)=> {
    if(!msg.author.bot){
        console.log(`${msg.author.username}: ${msg.content}`);
        const args = msg.content.split(" ");
        if(commands[args[0]]) commands[args[0]](client,msg);
    }
});

client.login("NzM4MDU0NTcxMDc0NzgxMjQ2.XyGU4g.LJoYv7SmWjmFUZ7pJZJkcz8Y0hI");
