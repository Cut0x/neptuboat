// importation des modules pour le fonctionnement du bot
const { BotEvent } = require('simple-djs-handler');
const { Events, ActivityType } = require('discord.js');

const { bot } = require("../src/config");

// construction de la structure de l'évènement
module.exports = new BotEvent({
    name: Events.ClientReady,
    async execute(c) {
        // définition de l'activité du bot
        c.user.setPresence({
            activities: [
                {
                    name: "ma bio ! - /help",
                    type: ActivityType.Watching
                }
            ],
            status: "idle"
        })
    },
});