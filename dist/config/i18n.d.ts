export type SupportedLocale = 'pt-BR' | 'en-US' | 'es-ES' | 'fr' | 'de' | 'it' | 'ja' | 'ko' | 'ru' | 'zh-CN';
export interface Messages {
    help: {
        title: string;
        description: string;
        howToUse: {
            title: string;
            content: string;
        };
        languages: {
            title: string;
        };
        tips: {
            title: string;
            content: string;
        };
        features: {
            title: string;
            content: string;
        };
        troubleshooting: {
            title: string;
            content: string;
        };
        supportButton: string;
        footer: string;
    };
    invite: {
        title: string;
        description: string;
        clickButton: string;
        permissions: string;
        permissionsList: string;
    };
    translation: {
        title: string;
        originalText: string;
        translatedText: string;
    };
    errors: {
        translationFailed: string;
        dmDisabled: string;
    };
}
export declare const translations: Record<SupportedLocale, Messages>;
export declare function getUserLocale(discordLocale: string): SupportedLocale;
export declare function getMessages(locale: SupportedLocale): Messages;
//# sourceMappingURL=i18n.d.ts.map