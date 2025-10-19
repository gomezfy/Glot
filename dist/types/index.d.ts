export interface LanguageConfig {
    code: string;
    name: string;
}
export interface TranslationCache {
    text: string;
    targetLang: string;
    translation: string;
    timestamp: number;
}
export type EmojiToLangMap = Record<string, LanguageConfig>;
//# sourceMappingURL=index.d.ts.map