const axios = require('axios');
const { SlashCommandBuilder } = require('discord.js');

function fetchData() {
  return (
    axios
      // TODO: Get Channel ID from Discord
      .get('https://discord.com/api/channels/{channelId}', {
        headers: {
          Authorization:
            // TODO: Get Bot Token from Discord
            'Bot ',
        },
      })
      .then((res) => {
        return res.data;
      })
      .catch((err) => {
        console.log(err);
      })
  );
}

module.exports = {
  data: new SlashCommandBuilder()
    .setName('channel')
    .setDescription('Replies with channel metadata!'),

  async execute(interaction) {
    const data = await fetchData();
    interaction.reply(JSON.stringify(data));
  },
};
