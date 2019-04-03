import { environment } from '@env/environment';
import { YandexTranslateService } from './yandex-translate.service';
import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { YandexTranslaterResponseText } from '@app/models/yandexTranslater.model';

describe('YandexTranslateService', () => {
  let service: YandexTranslateService;
  let back: HttpTestingController;

  const yandexApiUrl = `https://translate.yandex.net/api/v1.5/tr.json/translate?key=${environment.yandexTranslateKey}`;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [YandexTranslateService]
    });
  });

  beforeEach(inject([YandexTranslateService, HttpTestingController], (s: YandexTranslateService, b: HttpTestingController) => {
    service = s;
    back = b;
  }));

  it('should be created',
    () => {
      expect(service).toBeTruthy();
    });

  it('should return translated text english to russian',
    () => {
      const resultText: YandexTranslaterResponseText = {
        code: 200,
        lang: 'en-ru',
        text: ['привет мир'],
      };

      service.translate('hello world', 'ru').subscribe(text => {
        expect(text).toEqual(resultText);
      });

      back.expectOne({
        method: 'GET',
        url: `${yandexApiUrl}&text=hello%20world&lang=ru`
      }).flush(resultText);
    });

  it('should return translated text russian to english',
    () => {
      const resultText: YandexTranslaterResponseText = {
        code: 200,
        lang: 'ru-en',
        text: ['hello world']
      };

      service.translate('привет мир', 'en').subscribe(text => {
        expect(text).toEqual(resultText);
      });

      back.expectOne({
        method: 'GET',
        url: `${yandexApiUrl}&text=%D0%BF%D1%80%D0%B8%D0%B2%D0%B5%D1%82%20%D0%BC%D0%B8%D1%80&lang=en`
      }).flush(resultText);
    });
});
