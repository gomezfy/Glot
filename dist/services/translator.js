"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.translatorService = void 0;
const google_translate_api_1 = require("@vitalets/google-translate-api");
const languages_js_1 = require("../config/languages.js");
class TranslatorService {
    cache;
    constructor() {
        this.cache = new Map();
    }
    getCacheKey(text, targetLang) {
        return `${text}:${targetLang}`;
    }
    async translate(text, targetLang) {
        const cacheKey = this.getCacheKey(text, targetLang);
        if (this.cache.has(cacheKey)) {
            console.log(`📦 Usando tradução em cache para ${targetLang}`);
            return this.cache.get(cacheKey);
        }
        try {
            const result = await (0, google_translate_api_1.translate)(text, { to: targetLang });
            const translation = result.text;
            this.cache.set(cacheKey, translation);
            if (this.cache.size > languages_js_1.MAX_CACHE_SIZE) {
                const firstKey = this.cache.keys().next().value;
                if (firstKey) {
                    this.cache.delete(firstKey);
                }
            }
            return translation;
        }
        catch (error) {
            const errorMessage = error instanceof Error ? error.message : 'Unknown error';
            console.error('❌ Erro na tradução:', errorMessage);
            throw new Error(`Falha na tradução: ${errorMessage}`);
        }
    }
    getCacheSize() {
        return this.cache.size;
    }
    clearCache() {
        this.cache.clear();
        console.log('🗑️ Cache de traduções limpo');
    }
}
exports.translatorService = new TranslatorService();
//# sourceMappingURL=translator.js.map