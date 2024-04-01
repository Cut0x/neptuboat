const { BotCommand, CreateEmbed } = require('simple-djs-handler');
const wait = require('node:timers/promises').setTimeout;

module.exports = new BotCommand({
    name: 'help',
    description: '\ud83c\udfd3 Le bot affiche toutes les commandes !',
    execute: async (interaction) => {
        await interaction.deferReply({ content: ":gear: Chargement en cours...", fetchReply: true, ephemeral: true });
		
        await wait(1000);

        const ping_embed = {
            color: 0x996bff,
            title: "Liste de mes commandes :",
            thumbnail: {
                url: `https://cdn.discordapp.com/attachments/1058399490073170021/1224380008655487208/d6kavyd-62ecd00e-4f4c-4771-b570-b3c37069c721.jpg`
            },
            description: `> \` < > \` Renseignement requis\n> \` [ ] \` Renseignement facultatif`,
            fields: [
                {
                    name: ":one: Commandes informations :",
                    value: "\` /botinfos \` / \` /userinfos \` / \` /ping \`"
                },
                {
                    name: ":two: Commandes configurations :",
                    value: "*En développement*"
                },
                {
                    name: ":three: Commandes utils :",
                    value: "\` /vote \` / \` /invite \`"
                }
            ],
            footer: {
                text: "Votez pour le bot !"
            }
        }

        await interaction.editReply({
			content: `## <:n_oui:1063867562678558853> *Commande chargé*`,
			embeds: [
				ping_embed
			],
            ephemeral: true
        });
    },
});