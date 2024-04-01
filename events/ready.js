const { BotEvent } = require('simple-djs-handler');
const { Events, ActivityType } = require('discord.js');

const { bot } = require("../src/config");

module.exports = new BotEvent({
    name: Events.ClientReady,
    async execute(c) {
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