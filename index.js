//env
const { Client, GatewayIntentBits, Collection } = require('discord.js');
const dotenv = require('dotenv');
dotenv.config();
const { TOKEN, CLIENT_ID, GUILD_ID } = process.env;

//importacao dos comandos
const fs = require("node:fs")
const path = require("node:path")

const commandsPath = path.join(__dirname, "commands")
const commandsFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith(".js"))

const client = new Client({ intents: [GatewayIntentBits.Guilds] });
client.commands = new Collection

for (const file of commandsFiles) {
    const filePath = path.join(commandsPath, file);
    const command = require(filePath);
    console.log(command.data.name); // Adicione esta linha para verificar o nome do comando
    if ("data" in command && "execute" in command) {
      client.commands.set(command.data.name, command);
    } else {
      console.log(`Esse comando em ${filePath} está com "data" ou "execute" ausentes.`);
    }
  }
  
// Login do bot
client.once('ready', () => {
    console.log(`Pronto! Ayanami está conectada ao EVA 00 ${client.user.tag}`);
});

// LISTENER interações
client.on('interactionCreate', async interaction => {
    if (!interaction.isChatInputCommand()) return;
    const command = client.commands.get(interaction.commandName);
    if (!command){
        console.error('Comando inexistente');
        return;
    }
    try {
        await command.execute(interaction);
    }
    catch (error) {
        console.error(error); 
        await interaction.reply("Houve um erro ao executar o comando!");
    }
});

client.login(TOKEN);

