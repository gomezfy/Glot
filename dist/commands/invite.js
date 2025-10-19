"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.inviteCommand = void 0;
const discord_js_1 = require("discord.js");
const i18n_js_1 = require("../config/i18n.js");
const REQUIRED_PERMISSIONS = '68672';
exports.inviteCommand = {
    data: new discord_js_1.SlashCommandBuilder()
        .setName('invite')
        .setDescription('Get the bot invite link to add it to your server')
        .setDescriptionLocalizations({
        'pt-BR': 'Obtenha o link de convite do bot para adicioná-lo ao seu servidor',
        'es-ES': 'Obtén el enlace de invitación del bot para agregarlo a tu servidor',
        'fr': 'Obtenez le lien d\'invitation du bot pour l\'ajouter à votre serveur',
        'de': 'Holen Sie sich den Bot-Einladungslink, um ihn zu Ihrem Server hinzuzufügen',
        'it': 'Ottieni il link di invito del bot per aggiungerlo al tuo server',
        'ja': 'サーバーに追加するためのボット招待リンクを取得',
        'ko': '서버에 추가하기 위한 봇 초대 링크 받기',
        'ru': 'Получите ссылку-приглашение бота для добавления на ваш сервер',
        'zh-CN': '获取机器人邀请链接以将其添加到您的服务器'
    }),
    async execute(interaction) {
        const userLocale = (0, i18n_js_1.getUserLocale)(interaction.locale);
        const messages = (0, i18n_js_1.getMessages)(userLocale);
        const clientId = interaction.client.user.id;
        const inviteUrl = `https://discord.com/oauth2/authorize?client_id=${clientId}&scope=bot%20applications.commands&permissions=${REQUIRED_PERMISSIONS}`;
        const embed = new discord_js_1.EmbedBuilder()
            .setColor(0x5865F2)
            .setTitle(messages.invite.title)
            .setDescription(messages.invite.description)
            .addFields({
            name: messages.invite.permissions,
            value: messages.invite.permissionsList
        })
            .setFooter({
            text: 'Bot de Tradução v2.3.0 | discord.js',
        })
            .setTimestamp();
        const button = new discord_js_1.ButtonBuilder()
            .setLabel(messages.invite.clickButton.replace(/\*\*/g, ''))
            .setURL(inviteUrl)
            .setStyle(discord_js_1.ButtonStyle.Link);
        const row = new discord_js_1.ActionRowBuilder()
            .addComponents(button);
        await interaction.reply({
            embeds: [embed],
            components: [row]
        });
    }
};
//# sourceMappingURL=invite.js.map