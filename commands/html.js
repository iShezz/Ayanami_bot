
const { SlashCommandBuilder } = require("discord.js");
const { EmbedBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName("html")
        .setDescription("Relembre as tags HTML."),

    async execute(interaction) {
        // Crie a embed dentro da função execute
        const exampleEmbed = new EmbedBuilder()
            .setColor("Aqua")
            .setTitle('Comandos HTML')
            .addFields(
                { name: '\u200B', value: '\u200B' },
        { name: '<p>', value: 'Define um parágrafo', inline: true },
        { name: '<a>', value: 'Define um hyperlink', inline: true },
        { name: '<img>', value: 'Define uma imagem', inline: true },
        { name: '\u200B', value: '\u200B' },
        { name: '<h1>', value: 'Define um cabeçalho de nível 1', inline: true },
        { name: '<ul>', value: 'Define uma lista não ordenada', inline: true },
        { name: '<li>', value: 'Define um item de lista', inline: true },
        { name: '\u200B', value: '\u200B' },
        { name: '<div>', value: 'Define uma seção no documento', inline: true },
        { name: '<span>', value: 'Define uma seção no documento', inline: true },
        { name: '<form>', value: 'Define um formulário HTML', inline: true },
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

