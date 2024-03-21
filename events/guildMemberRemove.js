const { BotEvent } = require('simple-djs-handler');
const { Events, EmbedBuilder } = require('discord.js');

module.exports = new BotEvent({
    name: Events.GuildMemberRemove,
    async execute(member) {
        if (member.guild.id === member.client.config.neptunia.guild_id) {
            const channel = member.client.guilds.cache.get(member.client.config.neptunia.guild_id).channels.cache.find(channel => channel.id === member.client.config.neptunia.airport_channel);

            if (channel) channel.send({
                content: `:x: **Au revoir *${member.user.username}* !**`,
                embeds: [
                    new EmbedBuilder()
                        .setColor('Red')
                        .setDescription('On esprère que...non je déconne, on espère rien')
                ]
            });
        };
    },
});