"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.helpCommand = void 0;
const discord_js_1 = require("discord.js");
const languages_js_1 = require("../config/languages.js");
const i18n_js_1 = require("../config/i18n.js");
exports.helpCommand = {
    data: new discord_js_1.SlashCommandBuilder()
        .setName('help')
        .setDescription('Shows information about how to use the translation bot')
        .setDescriptionLocalizations({
        'pt-BR': 'Mostra informações sobre como usar o bot de tradução',
        'es-ES': 'Muestra información sobre cómo usar el bot de traducción',
        'fr': 'Affiche des informations sur l\'utilisation du bot de traduction',
        'de': 'Zeigt Informationen zur Verwendung des Übersetzungs-Bots',
        'it': 'Mostra informazioni su come usare il bot di traduzione',
        'ja': '翻訳ボットの使い方に関する情報を表示',
        'ko': '번역 봇 사용 방법에 대한 정보 표시',
        'ru': 'Показывает информацию о том, как использовать бота переводчика',
        'zh-CN': '显示如何使用翻译机器人的信息'
    }),
    async execute(interaction) {
        const userLocale = (0, i18n_js_1.getUserLocale)(interaction.locale);
        const messages = (0, i18n_js_1.getMessages)(userLocale);
        const languagesList = Object.entries(languages_js_1.EMOJI_TO_LANG)
            .map(([emoji, lang]) => `${emoji} **${lang.name}** (\`${lang.code}\`)`)
            .join('\n');
        const embed = new discord_js_1.EmbedBuilder()
            .setColor(0x0099FF)
            .setTitle(messages.help.title)
            .setDescription(messages.help.description)
            .addFields({
            name: messages.help.howToUse.title,
            value: messages.help.howToUse.content
        }, {
            name: messages.help.languages.title,
            value: languagesList
        }, {
            name: messages.help.tips.title,
            value: messages.help.tips.content
        }, {
            name: messages.help.features.title,
            value: messages.help.features.content
        }, {
            name: messages.help.troubleshooting.title,
            value: messages.help.troubleshooting.content
        })
            .setFooter({
            text: messages.help.footer,
        })
            .setTimestamp();
        const supportButton = new discord_js_1.ActionRowBuilder()
            .addComponents(new discord_js_1.ButtonBuilder()
            .setLabel(messages.help.supportButton)
            .setURL('https://discord.gg/f2jmNWh3WV')
            .setStyle(discord_js_1.ButtonStyle.Link));
        await interaction.reply({
            embeds: [embed],
            components: [supportButton]
        });
    }
};
//# sourceMappingURL=help.js.map