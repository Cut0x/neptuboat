const { BotCommand } = require('simple-djs-handler');

module.exports = new BotCommand({
    name: 'ping',
    description: '\ud83c\udfd3 Le bot répond sa latence et PONG !',
    execute: async (interaction) => {
        interaction.reply({
            content: ":ping_pong: Pong !"
        })
    },
});