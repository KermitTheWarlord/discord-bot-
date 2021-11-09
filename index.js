const { Client, Collection } = require("discord.js");
const fs = require('fs')
const chalk = require('chalk');
const client = new Client({
    intents: 32767,
});
module.exports = client;

client.interactions = new Collection()

fs.readdir(`./interactions/`, (err, files) => {
    if (err) return console.error(err)

    let jsfiles = files.filter(f => f.split(`.`).pop() === `js`)
    if (jsfiles.length <= 0) return console.log(`[${chalk.blue(`Loader`)}] No loadable interactions detected`)
    console.log(`[${chalk.blue(`Loader`)}] Loading ${chalk.blue(jsfiles.length)} interactions`)

    jsfiles.forEach((f, i) => {
        let props = require(`./interactions/${f}`)
        console.log(`[${chalk.blue(`Loader`)}] ${f} interaction loaded (${i + 1})`)
        client.interactions.set(props.help.custom_id, props)
    })
})

client.on(`interactionCreate`, async (interaction) => {
    if (interaction.isButton()) {
        
        var cmd = client.interactions.get(interaction.customId)
        if (cmd) cmd.run(client, interaction)
    }

})

// Global Variables
client.commands = new Collection();
client.slashCommands = new Collection();
client.config = require("./Data/config.json");

// Initializing the project
require("./handler")(client);

client.login(client.config.token);

client.on("messageCreate", async message=>{
    if(message.content.startsWith('stefane')){ // if command checks out
  message.reply(`maikata na <@598398599486898177> shte pravi shukar bibitka na ${message.author}`);
      }
    }
  );

  client.on("messageCreate", async message=>{
    if(message.content.startsWith('gosho')){ // if command checks out
  message.reply('<@382618233280135168> ai vc')
      }
    }
  );

  
  client.on("messageCreate", async message=>{
    if(message.content.startsWith('pedal')){ // if command checks out
  message.reply('https://media.discordapp.net/attachments/632922766185725973/845368291866181662/qj_mi_labadaq.gif')
      }
    }
  );