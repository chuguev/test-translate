// Initial state
export const initialTranslatedText = '';
export const initialTranslatableText = '';
export const initialTranslateError = '';
export const initialLanguage: Language = 'en';

// Interfaces
export type Language = 'ru' | 'en';

export interface YandexTranslaterResponse {
  code: number;
  lang: string;
}

export interface YandexTranslaterResponseText extends YandexTranslaterResponse {
  text: string[];
}
