"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.contextMenuCommands = void 0;
exports.handleContextMenuTranslate = handleContextMenuTranslate;
const discord_js_1 = require("discord.js");
const translator_js_1 = require("../services/translator.js");
const languages_js_1 = require("../config/languages.js");
const contextMenuLanguages = {
    'Traduzir para Português': languages_js_1.EMOJI_TO_LANG['🇧🇷'],
    'Translate to English': languages_js_1.EMOJI_TO_LANG['🇺🇸'],
    'Traducir a Español': languages_js_1.EMOJI_TO_LANG['🇪🇸']
};
exports.contextMenuCommands = [
    new discord_js_1.ContextMenuCommandBuilder()
        .setName('Traduzir para Português')
        .setType(discord_js_1.ApplicationCommandType.Message),
    new discord_js_1.ContextMenuCommandBuilder()
        .setName('Translate to English')
        .setType(discord_js_1.ApplicationCommandType.Message),
    new discord_js_1.ContextMenuCommandBuilder()
        .setName('Traducir a Español')
        .setType(discord_js_1.ApplicationCommandType.Message)
];
async function handleContextMenuTranslate(interaction) {
    const commandName = interaction.commandName;
    const targetLang = contextMenuLanguages[commandName];
    if (!targetLang) {
        await interaction.reply({
            content: '❌ Idioma não suportado.',
            ephemeral: true
        });
        return;
    }
    const message = interaction.targetMessage;
    if (!message.content || message.content.trim() === '') {
        await interaction.reply({
            content: '⚠️ Esta mensagem não contém texto para traduzir.',
            ephemeral: true
        });
        return;
    }
    await interaction.deferReply({ ephemeral: true });
    try {
        const translatedText = await translator_js_1.translatorService.translate(message.content, targetLang.code);
        const originalMessage = message.content.length > 200
            ? message.content.substring(0, 200) + '...'
            : message.content;
        const embed = new discord_js_1.EmbedBuilder()
            .setColor(0x0099FF)
            .setTitle(`${getEmojiByLang(targetLang)} Tradução para ${targetLang.name}`)
            .addFields({
            name: '📝 Texto original',
            value: `> ${originalMessage}`
        }, {
            name: '🔄 Tradução',
            value: `> ${translatedText}`
        })
            .setFooter({ text: '🔒 Apenas você pode ver esta mensagem' })
            .setTimestamp();
        await interaction.editReply({ embeds: [embed] });
        console.log(`✅ Tradução via menu de contexto: ${interaction.user.tag} → ${targetLang.name}`);
    }
    catch (error) {
        console.error('❌ Erro ao traduzir via menu de contexto:', error);
        await interaction.editReply({
            content: '❌ Erro ao traduzir a mensagem. Tente novamente em alguns segundos.'
        });
    }
}
function getEmojiByLang(lang) {
    for (const [emoji, config] of Object.entries(languages_js_1.EMOJI_TO_LANG)) {
        if (config.code === lang.code) {
            return emoji;
        }
    }
    return '🌍';
}
//# sourceMappingURL=contextMenuTranslate.js.map