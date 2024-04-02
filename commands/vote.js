// importation des modules pour le fonctionnement du bot
const { BotCommand, CreateEmbed } = require('simple-djs-handler');
const wait = require('node:timers/promises').setTimeout;

// création de la structure de la commande
module.exports = new BotCommand({
    name: 'vote',
    description: '\ud83c\udfd3 Te permet de voter pour le bot !',
    execute: async (interaction) => {
        await interaction.deferReply({ content: ":gear: Chargement een cours...", fetchReply: true, ephemeral: true });
		
        await wait(1000);

        // création d'un embred
        const ping_embed = new CreateEmbed({
            color: 0x996bff,
            description: `Pour voter, tu peux [cliquer ici](https://akiras.xyz/vote/?id=${interaction.client.id}) ou cliquer sur le lien ci-dessous :\n\n> :link: https://akiras.xyz/vote/?id=1220081470995959869`
        })

        // réponse du bot avec l'embed
        await interaction.editReply({
			content: `## <:pepeok:1020389675841622057> Merci`,
			embeds: [
				ping_embed
			],
            ephemeral: true
        });
    },
});