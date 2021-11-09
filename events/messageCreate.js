const client = require("../index");
const simplydjs = require('simply-djs')



client.on("messageCreate", async (message) => {

    simplydjs.chatbot(client, message, {
        chid: '894296777753264148',
        name: 'Maximum Velocity', // default: Your bot name
        })

    if (
        message.author.bot ||
        !message.guild ||
        !message.content.toLowerCase().startsWith(client.config.prefix)
    )
        return;

    const [cmd, ...args] = message.content
        .slice(client.config.prefix.length)
        .trim()
        .split(" ");

    const command = client.commands.get(cmd.toLowerCase()) || client.commands.find(c => c.aliases?.includes(cmd.toLowerCase()));

    if (!command) return;
    await command.run(client, message, args);

});