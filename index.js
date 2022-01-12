require('dotenv').config();
const { Client } = require('discord.js');
const client = new Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', async (message) => {
  try {
    const splitMessage = message.content.split(' ');

    if (splitMessage[0] === '-crab') {
      const command = splitMessage[1];

      if (!command) {
        return;
      }

      if (command.toLowerCase() === 'jarqin') {
        await message.reply(`Hello Jarqin!`);
      }

      if (command.toLowerCase() === 'hamid') {
        await message.reply(`Hello Ganteng!,<3!`);
      }

      if (command.toLowerCase() === 'fahri') {
        await message.reply(`Hello Fahri!`);
      }

      if (command.toLowerCase() === 'anime-today') {
        const animeList = {
          0: ['anime1', 'anime2'],
          1: [],
          2: ['anime3'],
          3: ['anime4'],
          4: ['anime6'],
          5: [],
          6: ['anime5'],
        };
        const day = new Date().getDay();
        await message.reply(animeList[day]);
      }
    }
  } catch (err) {
    console.log(err);
  }
});

client.login(process.env.DISCORD_BOT_TOKEN);
