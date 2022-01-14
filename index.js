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
        await message.reply(`Farhi engga ganteng, huh! :3`);
      }

      if (command.toLowerCase() === 'anime-today') {
        const animeList = {
          0: ['https://otakudesu.info/anime/op-sub-indo/'],
          1: ['https://otakudesu.info/anime/kimetsu-yaiba-season-2-sub-indo/'],
          2: ['https://otakudesu.info/anime/sabisco-sub-indo/'],
          3: ['no anime'],
          4: ['https://otakudesu.info/anime/orient-sub-indo/'],
          5: ['no anime'],
          6: ['no anime'],
        };

        var d = new Date();
        var utc = d.getTime() + d.getTimezoneOffset() * 60000;
        var nd = new Date(utc + 3600000 * 7);
        var day = nd.getDay();
        console.log(day);
        await message.reply(animeList[day]);
      }
    }
  } catch (err) {
    console.log(err);
  }
});

client.login(process.env.DISCORD_BOT_TOKEN);
