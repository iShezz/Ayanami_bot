const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("tim")
    .setDescription("Seja um descobridor e teste este comando."),

  async execute(interaction) {
    await interaction.reply("Maia");
  },
};

