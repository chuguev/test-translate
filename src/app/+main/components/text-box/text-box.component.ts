import { Component, Output, EventEmitter, Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-text-box',
  templateUrl: './text-box.component.html',
  styleUrls: ['../style.scss']
})
export class TextBoxComponent {
  public form: FormGroup;
  private language: string;

  @Input()
  set lang(lang: string) {
    this.language = lang;
  }

  get lang(): string {
    return this.language === 'en' ? '(С русского)' : '(С английского)';
  }

  @Output()
  private text: EventEmitter<string> = new EventEmitter();

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      text: ['']
    });

    this.form.get('text').valueChanges
      .pipe(
        debounceTime(300),
      )
      .subscribe(text => {
        this.text.emit(text);
      });
  }
}
