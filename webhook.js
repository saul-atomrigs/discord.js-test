const { Webhook, MessageBuilder } = require('discord-webhook-node');
const hook = new Webhook(
  '' // Replace with Discord webhook url
);

const embed = new MessageBuilder()
  .setTitle('GuildPal bot')
  .setAuthor(
    'by AtomrigsLab',
    'https://assets-global.website-files.com/62be13fdb8a06d0f7cf4aa7b/6454630cf2f26f770be22ffa_4979-p-1080.png',
    'https://www.google.com'
  )
  .setURL('https://www.google.com')
  .setColor('#00b0f4')
  .setThumbnail('https://cdn.discordapp.com/embed/avatars/0.png')
  .setDescription('Oh look a description :)')
  .setImage(
    'https://assets-global.website-files.com/62be13fdb8a06d0f7cf4aa7b/644c5bc44d1721dd937be97a_Custominze.gif'
  )
  .setFooter('AtomrigsLab', 'https://cdn.discordapp.com/embed/avatars/0.png')
  .setTimestamp();

hook.send(embed);
