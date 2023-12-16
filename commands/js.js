
const { SlashCommandBuilder } = require("discord.js");
const { EmbedBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName("js")
        .setDescription("Relembre os comandos do JavaScript."),

    async execute(interaction) {
        // Crie a embed dentro da função execute
        const exampleEmbed = new EmbedBuilder()
            .setColor("Aqua")
            .setTitle('Comandos JavaScript')
            .addFields(
                { name: '\u200B', value: '\u200B' },
                { name: 'console.log()', value: 'Exibe uma mensagem no console', inline: true },
                { name: 'document.getElementById()', value: 'Obtém um elemento pelo ID', inline: true },
                { name: 'let', value: 'Declara uma variável', inline: true },
                { name: '\u200B', value: '\u200B' },
                { name: 'function()', value: 'Declara uma função', inline: true },
                { name: 'if...else', value: 'Declara uma estrutura condicional', inline: true },
                { name: 'for loop', value: 'Cria um loop for', inline: true },
                { name: '\u200B', value: '\u200B' },
                { name: 'Array', value: 'Declara um array', inline: true },
                { name: 'JSON.parse()', value: 'Analisa uma string JSON', inline: true },
                { name: 'alert()', value: 'Exibe um alerta na página', inline: true },
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

