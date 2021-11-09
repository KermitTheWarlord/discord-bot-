const { MessageEmbed } = require('discord.js')

module.exports = {
    name: "8ball",
    description: "",
    permission: "SEND_MESSAGES",
  /**
   *
   * @param {Client} client
   * @param {Message} message
   * @param {String[]} args
   */
  run: async (client, message, args) => {
    if(!args[1]) return message.reply(":x: Please ask a full question!");
    let replies = ["Da.", "Ne.", "Ot de da znam.", "Izobshto ne me ebe", "moje bi...", "Manqk ti chuvash li sa?", "Mnoo qsno!", "Ne tochno :/", "Sigurno"];
    let result = Math.floor((Math.random() * replies.length));
    let question = args.slice(1).join(" ");

    const embed = new MessageEmbed();
    embed.setColor('#a8f1ff');
    embed.setAuthor(message.author.username, message.author.avatarURL({ dynamic: true })),
    embed.addField(":8ball: Question", question)
    embed.addField(":8ball: Answer", replies[result])

    message.reply({ embeds: [embed] });
  },
};