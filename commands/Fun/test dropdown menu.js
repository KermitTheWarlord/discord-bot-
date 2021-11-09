const{ MessageActionRow, MessageSelectMenu, MessageButton, MessageEmbed } = require("discord.js")

module.exports = {
  name: "dropdown",
  usage: "dropdown | Make sure to select options",
  description: "Sends a dropdown menu",
  timeout: "5000",
  category: "test",
  run: async(client, message, args) => {
    const row = new MessageActionRow()
    .addComponents(
      new MessageSelectMenu()
      .setCustomId("select")
      .setPlaceholder("Select your option")
      .addOptions([
        {
          label: "програма",
          description: "schedule for school!",
          value: "first"
        },
        {
          label: "учебници",
          description: "Click here to see option 2!",
          value: "second"
        },
        {
          label: "This is selection 3",
          description: "Click here to see option 3!",
          value: "third"
        },
      ])
    )

    let embed = new MessageEmbed()
    .setTitle("Welcome to the dropdown selection")
    .setDescription("Choose the option you want to select")
    .setColor("GREEN")

    let sendmsg = await message.channel.send({ content : "ㅤ", ephemeral:true, embeds : [embed], components:[row]})


    
let embed1 = new MessageEmbed()
.setColor('#ff00ff')
.setAuthor('KermitTheFroge')
.setTitle('Седмичната програма')
.setDescription('ако не работи пишете на KermitTheFroge#6791 за да се гръмне по-бързо')
.setFooter('ЩЕ СЕ ГРЪМНА')

    let embed2 = new MessageEmbed()
     .setTitle("You selected something!")
    .setDescription("You chose option 2")
    .setColor("GREEN")

    const row3 = new MessageActionRow()
    .addComponents(
        new MessageButton()
        .setLabel('BEL')
        .setStyle('LINK')
        .setURL('https://assets.change.org/photos/5/ps/cb/BOPsCbPUfBoNlGK-800x450-noPad.jpg?1573320542'),

        new MessageButton()
        .setLabel('математика')
        .setStyle('LINK')
        .setURL('https://assets.change.org/photos/5/ps/cb/BOPsCbPUfBoNlGK-800x450-noPad.jpg?1573320542'),

        new MessageButton()
        .setLabel('музика')
        .setStyle('LINK')
        .setURL('https://assets.change.org/photos/5/ps/cb/BOPsCbPUfBoNlGK-800x450-noPad.jpg?1573320542'),

        new MessageButton()
        .setLabel('информатика')
        .setStyle('LINK')
        .setURL('https://assets.change.org/photos/5/ps/cb/BOPsCbPUfBoNlGK-800x450-noPad.jpg?1573320542'),

    );

    let embed3 = new MessageEmbed()
    .setTitle("You selected something!")
    .setDescription("You chose option 3")
    .setColor("GREEN")

    const row2 = new MessageActionRow()
    .addComponents(
        new MessageButton()
        .setLabel('Monday')
        .setStyle('LINK')
        .setURL('https://cdn.discordapp.com/attachments/892317040575152148/894214973146943528/unknown.png'),

        new MessageButton()
        .setLabel('Tuesday')
        .setStyle('LINK')
        .setURL('https://cdn.discordapp.com/attachments/892317040575152148/894214289940951040/unknown.png'),

        new MessageButton()
        .setLabel('Wednesday')
        .setStyle('LINK')
        .setURL('https://cdn.discordapp.com/attachments/892317040575152148/894214327085699082/unknown.png'),

        new MessageButton()
        .setLabel('Thursday')
        .setStyle('LINK')
        .setURL('https://cdn.discordapp.com/attachments/892317040575152148/894214373080465488/unknown.png'),

        new MessageButton()
        .setLabel('Friday')
        .setStyle('LINK')
        .setURL('https://cdn.discordapp.com/attachments/892317040575152148/894214411743539200/unknown.png'),
        );

const collector = message.channel.createMessageComponentCollector({
  componentType: "SELECT_MENU"
})

collector.on("collect", async (collected) => {
const value = collected.values[0]

if(value === "first") {
  collected.reply({embeds:[embed1], components:[row2], ephemeral:true})
}

if(value === "second") {
  collected.reply({embeds:[embed2], components:[row3], ephemeral:true})
}

if(value === "third") {
  collected.reply({embeds:[embed3], components:[row2], ephemeral:true})
}


})

  }
}