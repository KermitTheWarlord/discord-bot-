const { MessageActionRow, MessageButton, MessageEmbed } = require('discord.js');

module.exports = {
	  name: "програма",
    description: "schedule for school",
    permission: "SEND_MESSAGES",                             
  /**
   * @param {Client} client
   * @param {Message} message
   * @param {String} args
  */
   run: async (client, message, args) => {
      const row = new MessageActionRow()
        .addComponents(
            new MessageButton()
            .setLabel('Monday')
            .setStyle('LINK')
            .setURL(`https://cdn.discordapp.com/attachments/892317040575152148/894214973146943528/unknown.png`),

            new MessageButton()
            .setLabel('Tuesday')
            .setStyle('LINK')
            .setURL(`https://cdn.discordapp.com/attachments/892317040575152148/894214289940951040/unknown.png`),

            new MessageButton()
            .setLabel('Wednesday')
            .setStyle('LINK')
            .setURL(`https://cdn.discordapp.com/attachments/892317040575152148/894214327085699082/unknown.png`),

            new MessageButton()
            .setLabel('Thursday')
            .setStyle('LINK')
            .setURL(`https://cdn.discordapp.com/attachments/892317040575152148/894214373080465488/unknown.png`),

            new MessageButton()
            .setLabel('Friday')
            .setStyle('LINK')
            .setURL(`https://cdn.discordapp.com/attachments/892317040575152148/894214411743539200/unknown.png`),


            );

            const embed = new MessageEmbed()
            .setColor('#ff00ff')
            .setAuthor('KermitTheFroge')
            .setTitle('Седмичната програма')
            .setDescription('ако не работи пишете на KermitTheFroge#6791 за да се гръмне по-бързо')
            .setFooter(`ЩЕ СЕ ГРЪМНА`)
    
            message.channel.send({ content: 'Im kinda retarded', ephemeral: true, embeds: [embed], components: [row]});
}
};
