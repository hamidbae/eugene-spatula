require('dotenv').config();
const { Client } = require('discord.js');
const client = new Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', async (message) => {
  try {
    const splitMessage = message.content.split(' ');

    if (splitMessage[0] === '$eugene') {
      const command = splitMessage[1];

      if (!command) {
        return;
      }

      if (command.toLowerCase() === 'hello') {
        await message.reply('Hello there!');
      }
    }
  } catch (err) {
    console.log(err);
  }
});

client.login(process.env.DISCORD_BOT_TOKEN);
