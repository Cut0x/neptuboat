// importantion des modules pour le fonctionnement du bot
const { BotClient } = require('simple-djs-handler');
const { GatewayIntentBits } = require('discord.js');

const config = require("./src/config");

// création de l'instance du bot discord
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

// démarrage du client / bot
client.start();

// Exporter les données de le config
client.config = config;