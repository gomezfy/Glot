"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
const translator_js_1 = require("./services/translator.js");
const languages_js_1 = require("./config/languages.js");
const help_js_1 = require("./commands/help.js");
const invite_js_1 = require("./commands/invite.js");
const contextMenuTranslate_js_1 = require("./commands/contextMenuTranslate.js");
const register_js_1 = require("./commands/register.js");
const i18n_js_1 = require("./config/i18n.js");
class DiscordTranslatorBot {
    client;
    token;
    constructor() {
        this.token = this.getToken();
        this.client = this.createClient();
        this.setupEventHandlers();
    }
    getToken() {
        const token = process.env.DISCORD_BOT_TOKEN;
        if (!token) {
            console.error('❌ ERRO: Token do bot não encontrado!');
            console.error('📝 Por favor, configure o secret DISCORD_BOT_TOKEN no Replit.');
            console.error('🔗 Obtenha seu token em: https://discord.com/developers/applications');
            process.exit(1);
        }
        return token;
    }
    createClient() {
        return new discord_js_1.Client({
            intents: [
                discord_js_1.GatewayIntentBits.Guilds,
                discord_js_1.GatewayIntentBits.GuildMessages,
                discord_js_1.GatewayIntentBits.GuildMessageReactions,
                discord_js_1.GatewayIntentBits.MessageContent
            ],
            partials: [
                discord_js_1.Partials.Message,
                discord_js_1.Partials.Channel,
                discord_js_1.Partials.Reaction
            ]
        });
    }
    setupEventHandlers() {
        this.client.once(discord_js_1.Events.ClientReady, this.onReady.bind(this));
        this.client.on(discord_js_1.Events.MessageReactionAdd, this.onReactionAdd.bind(this));
        this.client.on(discord_js_1.Events.InteractionCreate, this.onInteraction.bind(this));
        this.client.on(discord_js_1.Events.Error, this.onError.bind(this));
        process.on('SIGINT', this.shutdown.bind(this));
    }
    async onReady(client) {
        console.log(`✅ Bot conectado como ${client.user.tag}`);
        console.log(`🌍 Pronto para traduzir mensagens!`);
        console.log(`📝 Emojis suportados: ${Object.keys(languages_js_1.EMOJI_TO_LANG).join(' ')}`);
        try {
            await (0, register_js_1.registerCommands)(this.token, client.user.id);
        }
        catch (error) {
            console.error('⚠️ Não foi possível registrar comandos slash');
        }
        console.log(`\n💡 Como usar:`);
        console.log(`   • Use /help para ver todas as informações`);
        console.log(`   • Use /invite para adicionar o bot ao seu servidor`);
        console.log(`   • Clique com botão direito em mensagens para traduzir (só você vê)`);
        console.log(`   • Ou reaja com emoji de bandeira para traduzir via DM\n`);
    }
    async onReactionAdd(reaction, user) {
        if (user.bot)
            return;
        try {
            if (reaction.partial) {
                await reaction.fetch();
            }
            const emoji = reaction.emoji.name;
            if (!emoji || !languages_js_1.EMOJI_TO_LANG[emoji]) {
                return;
            }
            const targetLang = languages_js_1.EMOJI_TO_LANG[emoji];
            const message = reaction.message;
            if (message.partial) {
                await message.fetch();
            }
            if (!message.content || message.content.trim() === '') {
                console.log('⚠️ Mensagem vazia ou sem conteúdo de texto, ignorando...');
                return;
            }
            await this.handleTranslation(message.content, targetLang, user);
        }
        catch (error) {
            console.error('❌ Erro ao processar reação:', error);
        }
    }
    async handleTranslation(messageContent, targetLang, user) {
        try {
            const preview = messageContent.length > 50
                ? messageContent.substring(0, 50) + '...'
                : messageContent;
            console.log(`\n🔄 Nova tradução solicitada por ${user.tag}`);
            console.log(`   Idioma alvo: ${targetLang.name} ${this.getEmojiByLang(targetLang)}`);
            console.log(`   Texto: "${preview}"`);
            const translatedText = await translator_js_1.translatorService.translate(messageContent, targetLang.code);
            await this.sendTranslationDM(user, messageContent, translatedText, targetLang);
            console.log(`✅ Tradução enviada via DM para ${user.tag}`);
        }
        catch (error) {
            await this.handleTranslationError(error, user, targetLang);
        }
    }
    async sendTranslationDM(user, originalText, translatedText, targetLang) {
        const userLocale = (0, i18n_js_1.getUserLocale)(targetLang.code === 'pt' ? 'pt-BR' :
            targetLang.code === 'es' ? 'es-ES' :
                targetLang.code === 'fr' ? 'fr' :
                    targetLang.code === 'de' ? 'de' :
                        targetLang.code === 'it' ? 'it' :
                            targetLang.code === 'ja' ? 'ja' :
                                targetLang.code === 'ko' ? 'ko' :
                                    targetLang.code === 'ru' ? 'ru' :
                                        targetLang.code === 'zh-cn' ? 'zh-CN' : 'en-US');
        const messages = (0, i18n_js_1.getMessages)(userLocale);
        const emoji = this.getEmojiByLang(targetLang);
        const originalMessage = originalText.length > 100
            ? originalText.substring(0, 100) + '...'
            : originalText;
        const dmMessage = [
            `${emoji} ${messages.translation.title.replace('{language}', targetLang.name)}`,
            '',
            messages.translation.originalText,
            `> ${originalMessage}`,
            '',
            messages.translation.translatedText,
            `> ${translatedText}`
        ].join('\n');
        await user.send(dmMessage);
    }
    async handleTranslationError(error, user, targetLang) {
        const errorMessage = error instanceof Error ? error.message : 'Erro desconhecido';
        console.error('❌ Erro ao processar tradução:', errorMessage);
        try {
            const userLocale = targetLang ? (0, i18n_js_1.getUserLocale)(targetLang.code === 'pt' ? 'pt-BR' :
                targetLang.code === 'es' ? 'es-ES' :
                    targetLang.code === 'fr' ? 'fr' :
                        targetLang.code === 'de' ? 'de' :
                            targetLang.code === 'it' ? 'it' :
                                targetLang.code === 'ja' ? 'ja' :
                                    targetLang.code === 'ko' ? 'ko' :
                                        targetLang.code === 'ru' ? 'ru' :
                                            targetLang.code === 'zh-cn' ? 'zh-CN' : 'en-US') : (0, i18n_js_1.getUserLocale)('en-US');
            const messages = (0, i18n_js_1.getMessages)(userLocale);
            await user.send(messages.errors.translationFailed);
        }
        catch (dmError) {
            const dmErrorMsg = dmError instanceof Error ? dmError.message : 'Erro ao enviar DM';
            console.error('Erro ao enviar DM:', dmErrorMsg);
            console.log('⚠️ Usuário pode estar com DMs desativadas');
        }
    }
    async onInteraction(interaction) {
        try {
            if (interaction.isChatInputCommand()) {
                if (interaction.commandName === 'help') {
                    await help_js_1.helpCommand.execute(interaction);
                    console.log(`ℹ️ Comando /help usado por ${interaction.user.tag}`);
                }
                else if (interaction.commandName === 'invite') {
                    await invite_js_1.inviteCommand.execute(interaction);
                    console.log(`ℹ️ Comando /invite usado por ${interaction.user.tag}`);
                }
            }
            else if (interaction.isMessageContextMenuCommand()) {
                await (0, contextMenuTranslate_js_1.handleContextMenuTranslate)(interaction);
            }
        }
        catch (error) {
            console.error('❌ Erro ao processar interação:', error);
            if (interaction.isRepliable()) {
                const errorReply = {
                    content: '❌ Ocorreu um erro ao executar este comando.',
                    ephemeral: true
                };
                if (interaction.replied || interaction.deferred) {
                    await interaction.followUp(errorReply).catch(() => { });
                }
                else {
                    await interaction.reply(errorReply).catch(() => { });
                }
            }
        }
    }
    getEmojiByLang(targetLang) {
        const entry = Object.entries(languages_js_1.EMOJI_TO_LANG).find(([, lang]) => lang.code === targetLang.code && lang.name === targetLang.name);
        return entry ? entry[0] : '🌍';
    }
    onError(error) {
        console.error('❌ Erro do Discord:', error);
    }
    shutdown() {
        console.log('\n👋 Desligando bot...');
        this.client.destroy();
        process.exit(0);
    }
    async start() {
        try {
            await this.client.login(this.token);
        }
        catch (error) {
            const errorMessage = error instanceof Error ? error.message : 'Erro desconhecido';
            console.error('❌ Erro ao fazer login:', errorMessage);
            console.error('🔑 Verifique se o token DISCORD_BOT_TOKEN está correto.');
            process.exit(1);
        }
    }
}
console.log('🚀 Iniciando bot de tradução Discord...');
console.log('📅 Versão: 2.4.0 (TypeScript - Menu de Contexto + Tradução no Canal)');
console.log('═'.repeat(50));
const bot = new DiscordTranslatorBot();
bot.start().catch(console.error);
//# sourceMappingURL=index.js.map