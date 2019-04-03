import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { ComponentsModule } from '@app/+main/components';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainComponent } from './main.component';
import { YandexTranslateService } from '@app/shared/services/yandex-translate.service';
import { YandexTranslaterResponseText, initialTranslatedText } from '@app/models/yandexTranslater.model';
import { of, throwError } from 'rxjs';

describe('MainComponent', () => {
  let component: MainComponent;
  let fixture: ComponentFixture<MainComponent>;
  let yandexTranslateService: YandexTranslateService;
  let spy: jasmine.Spy;
  let response: YandexTranslaterResponseText;
  const text = 'hello world';

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        BrowserAnimationsModule,
        ComponentsModule
      ],
      declarations: [MainComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainComponent);
    component = fixture.componentInstance;
    yandexTranslateService = fixture.debugElement.injector.get(YandexTranslateService);
    response = {
      code: 200,
      lang: 'en-ru',
      text: ['привет мир'],
    };
    spy = spyOn(yandexTranslateService, 'translate');
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call YandexTranslateService', () => {
    spy.and.returnValue(of(response));
    component.translate(text);
    expect(spy.calls.any()).toBeTruthy();
  });

  it('should set translated text', () => {
    spy.and.returnValue(of(response));
    component.translate(text);
    expect(component.translatedText).toBe(response.text[0]);
  });

  it('should set error', () => {
    spy.and.returnValue(throwError('error'));
    component.translate(text);
    expect(component.error).toBe('Ошибка перевода');
  });

  it('should reset translated text', () => {
    spy.and.returnValue(throwError('error'));
    component.translate(text);
    expect(component.translatedText).toBe(initialTranslatedText);
  });
});
