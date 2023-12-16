
const { SlashCommandBuilder } = require("discord.js");
const { EmbedBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName("css")
        .setDescription("Relembre as tags CSS."),

    async execute(interaction) {
        const exampleEmbed = new EmbedBuilder()
            .setColor("Aqua")
            .setTitle('Comandos CSS')
            .addFields(
                { name: '\u200B', value: '\u200B' },
                { name: 'body', value: 'Seleciona o elemento body', inline: true },
                { name: 'div', value: 'Seleciona o elemento div', inline: true },
                { name: '.classe', value: 'Seleciona a classe com o nome "classe"', inline: true },
                { name: '\u200B', value: '\u200B' },
                { name: '#id', value: 'Seleciona o elemento com o ID "id"', inline: true },
                { name: 'p', value: 'Seleciona o elemento p (parágrafo)', inline: true },
                { name: 'h1', value: 'Seleciona o elemento h1 (cabeçalho de nível 1)', inline: true },
                { name: '\u200B', value: '\u200B' },
                { name: 'font-size', value: 'Define o tamanho da fonte', inline: true },
                { name: 'color', value: 'Define a cor do texto', inline: true },
                { name: 'margin', value: 'Define as margens de um elemento', inline: true },
            );

        try {
            await interaction.reply({ embeds: [exampleEmbed] });
        } catch (error) {
            console.error(error);
            await interaction.reply('Houve um erro ao executar o comando!');
        }
    },
};

