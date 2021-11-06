
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
