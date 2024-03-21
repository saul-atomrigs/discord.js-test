const { SlashCommandBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('아톰')
    .setDescription('Replies with 릭스랩!'),

  async execute(interaction) {
    await interaction.reply('릭스랩!');
  },
};
