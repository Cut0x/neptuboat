const { BotCommand, CreateEmbed } = require('simple-djs-handler');
const wait = require('node:timers/promises').setTimeout;

module.exports = new BotCommand({
    name: 'vote',
    description: '\ud83c\udfd3 Te permet de voter pour le bot !',
    execute: async (interaction) => {
        await interaction.deferReply({ content: ":gear: Chargement een cours...", fetchReply: true, ephemeral: true });
		
        await wait(1000);

        const ping_embed = new CreateEmbed({
            color: 0x996bff,
            description: `Pour voter, tu peux [cliquer ici](https://akiras.xyz/vote/?id=${interaction.client.id}) ou cliquer sur le lien ci-dessous :\n\n> :link: https://akiras.xyz/vote/?id=1220081470995959869`
        })

        await interaction.editReply({
			content: `## <:pepeok:1020389675841622057> Merci`,
			embeds: [
				ping_embed
			],
            ephemeral: true
        });
    },
});