const { MessageEmbed } = require('discord.js')

module.exports = {
    name: "ban",
    description: "🔨 Ban someone who broke rules",
    type: 'CHAT_INPUT',
    userPermissions: ["ADMINISTRATOR"],
    options: [
        {
            name: "target",
            description: "User to be banned",
            type: 'USER',
            required: true,
        },
        {
            name: "reason",
            description: "Reason for ban",
            type: 'STRING',
            required: false,
        }
    ],
     run: async (client, interaction, args) => {
       
  let check = client.emojis.cache.get("886812691262496850")
  let cross = client.emojis.cache.get("886812692000686140")
  let warn = client.emojis.cache.get("890917122337833000")

    

  const target = interaction.options.getMember('target')

  const reason = interaction.options.getString('reason') || "No reason provided";



  if(!interaction.member.permissions.has("BAN_MEMBERS")) {
       let embed = new MessageEmbed()
         .setColor('RED')
         .setDescription(`${errorEmoji} | You Don't Have Ban permissions`)
       return interaction.followUp({ embeds: [embed] })
   }

   let kickdm = new MessageEmbed()
   .setColor('YELLOW')
   .setDescription(` ⚠ | You have been Banned from **${interaction.guild.name}**`)
   .setFooter(`Reason - ${reason}`)
  await target.send({embeds:[kickdm]}).catch((err) => {
    console.log("FUCK LIFE") 
  })

  target.ban({ target });

  let banmsg = new MessageEmbed()
   .setColor('GREEN')
   .setDescription(`**${interaction.user} Banned ${target.user.tag}**`)
   .setFooter(`${reason}`)
  interaction.editReply({ embeds: [banmsg] });

     },
};