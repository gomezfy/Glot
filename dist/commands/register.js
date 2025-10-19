"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerCommands = registerCommands;
const discord_js_1 = require("discord.js");
const help_js_1 = require("./help.js");
const invite_js_1 = require("./invite.js");
const contextMenuTranslate_js_1 = require("./contextMenuTranslate.js");
const commands = [
    help_js_1.helpCommand.data.toJSON(),
    invite_js_1.inviteCommand.data.toJSON(),
    ...contextMenuTranslate_js_1.contextMenuCommands.map(cmd => cmd.toJSON())
];
async function registerCommands(token, clientId) {
    const rest = new discord_js_1.REST().setToken(token);
    try {
        console.log('🔄 Registrando comandos slash...');
        await rest.put(discord_js_1.Routes.applicationCommands(clientId), { body: commands });
        console.log('✅ Comandos registrados com sucesso!');
        console.log(`   • /help - Mostra informações sobre o bot`);
        console.log(`   • /invite - Gera link para adicionar o bot`);
        console.log(`   • Menu de contexto - Traduzir mensagens (botão direito)`);
    }
    catch (error) {
        console.error('❌ Erro ao registrar comandos:', error);
        throw error;
    }
}
//# sourceMappingURL=register.js.map