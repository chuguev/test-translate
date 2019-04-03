import { Component, Input, OnChanges } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-error-box',
  template: '',
  styleUrls: ['../style.scss'],
})

export class ErrorBoxComponent implements OnChanges {
  @Input()
  private error: string;

  constructor(private matSnackBar: MatSnackBar) { }

  /**
   * bug angular material
   * https://github.com/angular/angular/issues/15634#issuecomment-470282994
   */
  ngOnChanges() {
    setTimeout(() => {
      this.matSnackBar.open(this.error, 'Закрыть', {
        duration: 2000
      });
    }, 0);
  }
}
