declare class TranslatorService {
    private cache;
    constructor();
    private getCacheKey;
    translate(text: string, targetLang: string): Promise<string>;
    getCacheSize(): number;
    clearCache(): void;
}
export declare const translatorService: TranslatorService;
export {};
//# sourceMappingURL=translator.d.ts.map