import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-result-box',
  templateUrl: './result-box.component.html',
  styleUrls: ['../style.scss']
})
export class ResultBoxComponent {

  private language: string;

  @Input()
  set lang(lang: string) {
    this.language = lang;
  }

  get lang(): string {
    return this.language === 'en' ? '(На английский)' : '(На русский)';
  }

  @Input()
  public text: string;

}
