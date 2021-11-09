module.exports = {
    name: "stilqn",
    description: "",
    permission: "SEND_MESSAGES",
  /**
   *
   * @param {Client} client
   * @param {Message} message
   * @param {String[]} args
   */
  run: async (client, message, args) => {

    message.channel.send({content: "vankata ima malka pishka"});
  },
};