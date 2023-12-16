
const { SlashCommandBuilder } = require("discord.js");
const { EmbedBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName("git")
        .setDescription("Relembre os comandos Git."),

    async execute(interaction) {
        // Crie a embed dentro da função execute
        const exampleEmbed = new EmbedBuilder()
            .setColor("Aqua")
            .setTitle('Comandos git')
            .addFields(
                { name: '\u200B', value: '\u200B' },
                { name: '$ git init', value: 'Inicializa o Git no diretório', inline: true },
                { name: '$ git clone <URL>', value: 'Clona um repositório remoto', inline: true },
                { name: '$ git add <arquivo>', value: 'Adiciona alterações ao índice', inline: true },
                { name: '\u200B', value: '\u200B' },
                { name: '$ git commit -m "<mensagem>"', value: 'Cria um novo commit com uma mensagem', inline: true },
                { name: '$ git pull', value: 'Puxa alterações do repositório remoto', inline: true },
                { name: '$ git push', value: 'Envia commits para o repositório remoto', inline: true },
            );

        try {
            // Envie a embed ao usuário
            await interaction.reply({ embeds: [exampleEmbed] });
        } catch (error) {
            console.error(error);
            await interaction.reply('Houve um erro ao executar o comando!');
        }
    },
};

