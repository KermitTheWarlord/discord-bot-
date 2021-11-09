module.exports = {
    name: 'calculator',
    description: 'Make a calculator',
    aliases: ['cal'],
    usage: 'calculator',
    timeout: "2000",
    /**
     *
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */
    run: async (client, message, args) => {
        const simplydjs = require('simply-djs')


        simplydjs.calculator(message, {
            embedColor: 'WHITE', 
        })
    },
};