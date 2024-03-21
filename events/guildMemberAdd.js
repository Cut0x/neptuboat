const { BotEvent } = require('simple-djs-handler');
const { Events, EmbedBuilder } = require('discord.js');

module.exports = new BotEvent({
    name: Events.GuildMemberAdd,
    async execute(member) {
        if (member.guild.id === member.client.config.neptunia.guild_id) {
            const channel = member.client.guilds.cache.get(member.client.config.neptunia.guild_id).channels.cache.find(channel => channel.id === member.client.config.neptunia.airport_channel);

            if (channel) channel.send({
                content: `:tada: **Bienvenue ${member} !**`,
                embeds: [
                    new EmbedBuilder()
                        .setColor('Green')
                        .setDescription('Respecte bien les règles, ici on est une famille pas un centre pour abruti')
                ]
            });
        };
    },
});