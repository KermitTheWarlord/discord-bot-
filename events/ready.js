const client = require("../index");

client.on('ready', () => {
    console.log(`${client.user.tag} logged in at Time: ${Date()}`)
  })