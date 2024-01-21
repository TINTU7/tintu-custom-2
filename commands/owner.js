const { ApplicationCommandOptionType } = require('discord.js');
const db = require("../mongoDB");

module.exports = {
  name: "owner",
  description: "Get information about bot owner.",
  permissions: "0x0000000000000800",
  options: [],

  run: async (client, interaction) => {
    try {
      const youtubeLink = 'https://www.youtube.com/@doxdeveopment';
      const InstagramLink = 'https://www.instagram.com/_dox_development_/';
      const { EmbedBuilder } = require('discord.js')
        const embed = new EmbedBuilder()
            .setColor('#14c9d3')
            .setAuthor({
          name: 'Dev Info',
          iconURL: 'https://cdn.discordapp.com/attachments/1155195951707869235/1155196079520874566/ac6a5b2b3f57c684fa3a4068dc01941a.png?ex=65be79af&is=65ac04af&hm=221eb62ae3a6ab5d6e80e2b0e7c4a08d30dd11e5cf732c0523202d4e754c346a&',
              url: 'https://discord.gg/6H9n3ZFtH2'
            })
            .setDescription(`__**About me**__:\n\n ▶️ Myself AdaM aka TINTU. I am a discord bot developer and discord developer. I love playing games, watching anime . You will get faster replies on instagram than other social media. Feel free to contact me!\n YouTube :[DOX DEVELOPMENT](${youtubeLink})\n Instagram :[DOX DEVELOPMENT](${InstagramLink})`)
            .setTimestamp();
      interaction.reply({ embeds: [embed] }).catch(e => {});

    } catch (e) {
    console.error(e); 
  }
  },
};
