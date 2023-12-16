const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("vaz")
    .setDescription("Cade o vaz?"),

  async execute(interaction) {
    await interaction.reply("Vaz sumiu de novo!");
  },
};

