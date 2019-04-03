import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '@env/environment';
import { YandexTranslaterResponseText, Language } from '@app/models/yandexTranslater.model';

/**
 * https://tech.yandex.ru/translate/doc/dg/concepts/about-docpage/
 */

@Injectable({
  providedIn: 'root',
})
export class YandexTranslateService {

  constructor(private http: HttpClient) { }

  public translate(text: string, lang: Language): Observable<YandexTranslaterResponseText> {
    const data = encodeURIComponent(text);
    return this.http.get(
      `https://translate.yandex.net/api/v1.5/tr.json/translate?key=${environment.yandexTranslateKey}&text=${data}&lang=${lang}`
    ).pipe(
      map((response: YandexTranslaterResponseText) => response)
    );
  }
}
