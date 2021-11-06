## **SlashCommandsLearn** 👋
<br>

## **Install**
```js 
npm i @discordjs/rest discord.js
```
<br>

- ## **Source**
```js
const { Client, Intents, MessageEmbed } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
client.on("ready" , () => {
const commands = [{
    name : "command1",
    description : "command1"
},{
    name : "command2",
    description : "command3"
}]
    const rest = new REST({ version: '9' }).setToken(process.env.token);
    
    (async () => {
        try {
            await rest.put(
                Routes.applicationCommands(client.user.id),
                { body: commands },
            );
    
            console.log('Done');
        } catch (error) {
            console.error(error);
        }
    })();
})
client.on('interactionCreate', async interaction => {
if (!interaction.isCommand()) return;
await interaction.deferReply()
if(interaction.commandName == "command1"){

await interaction.editReply("command1")
} else
if(interaction.commandName == "command2"){

await interaction.editReply("command2")
})

client.login(process.env.token)
```
- ## **For Add Options**
```js
options : [{
name : "User",
description : "THE USER",
type : 3,
required : true
}]
```
## **Exp:**
<p>
<img src="https://cdn.discordapp.com/attachments/884639116774490162/906290482135564289/unknown.png" src="">
<img src="https://cdn.discordapp.com/attachments/884639116774490162/906296849995030528/unknown.png">
<p>
<br>

## **Copyrights:**
<h4>All rights reserved 2021 - 2022: <a href="https://discord.com/user/772546533203247115">' OnlyMahmoud👑' .#0009</a></h4>
<br>

## **Support:**
<h4><a href="https://discord.gg/7XbDEtAJx8">Thailand Codes</a></h4> 
Or OnlyMahmoud.Official@gmail.com</a>
