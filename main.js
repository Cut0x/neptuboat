const { BotClient } = require('simple-djs-handler');
const { GatewayIntentBits } = require('discord.js');

const config = require("./src/config");

const client = new BotClient({
    token: config.bot.token,
    slashCommandsEnabled: true,
    slashCommandsClientId: config.bot.client_id,
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMembers,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.GuildPresences
    ],
});

client.start();