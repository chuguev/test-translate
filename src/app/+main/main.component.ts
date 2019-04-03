import { Component } from '@angular/core';
import { YandexTranslateService } from '@app/shared/services/yandex-translate.service';
import {
  YandexTranslaterResponseText,
  Language,
  initialTranslatedText,
  initialTranslatableText,
  initialTranslateError,
  initialLanguage,
} from '@app/models/yandexTranslater.model';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
})
export class MainComponent {
  public translatedText: string = initialTranslatedText;
  public translatableText: string = initialTranslatableText;
  public error: string = initialTranslateError;
  public language: Language = initialLanguage;

  constructor(private yandexTranslater: YandexTranslateService) { }

  public translate(text: string): void {
    this.translatableText = text;

    if (!this.translatableText) {
      this.resetTranslatedText();
      return;
    }

    this.language = this.defineFinalLanguage();
    this.yandexTranslater.translate(this.translatableText, this.language)
      .subscribe({
        next: (translatedText: YandexTranslaterResponseText) => {
          this.translatedText = translatedText.text[0];
          this.error = initialTranslateError;
        },
        error: () => {
          this.error = 'Ошибка перевода';
          this.resetTranslatedText();
        }
      });
  }

  private resetTranslatedText(): void {
    this.translatedText = initialTranslatedText;
  }

  private defineFinalLanguage(): Language {
    const ruExp: RegExp = /[а-яёЁ]/i;
    return ruExp.test(this.translatableText) ? 'en' : 'ru';
  }
}
