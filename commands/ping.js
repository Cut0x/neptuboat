const { BotCommand, CreateEmbed } = require('simple-djs-handler');
const wait = require('node:timers/promises').setTimeout;

module.exports = new BotCommand({
    name: 'ping',
    description: '\ud83c\udfd3 Le bot répond sa latence et PONG !',
    execute: async (interaction) => {
        const mesg = await interaction.deferReply({ content: ":ping_pong: Pong !", fetchReply: true, ephemeral: false });
		
        await wait(1000);
        
        const botLatency = parseInt(mesg.createdTimestamp - interaction.createdTimestamp);
        const APILatency = parseInt(interaction.client.ws.ping);

        const ping_embed = new CreateEmbed({
            color: 0x996bff,
            description: `> Ici ma latence : \`0,${botLatency} s\`\n> Ici la latence de l'API Discord : \`0,${APILatency} s\``
        })

        await interaction.editReply({
			content: `# :ping_pong:`,
			embeds: [
				ping_embed
			],
            ephemeral: false
        });
    },
});