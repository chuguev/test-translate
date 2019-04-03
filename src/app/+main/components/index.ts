import { NgModule } from '@angular/core';
import { ResultBoxComponent } from '@app/+main/components/result-box/result-box.component';
import { TextBoxComponent } from '@app/+main/components/text-box/text-box.component';
import { ErrorBoxComponent } from '@app/+main/components/error-box/error-box.component';

import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

const COMPONENTS: any[] = [
  ResultBoxComponent,
  TextBoxComponent,
  ErrorBoxComponent,
];

@NgModule({
  imports: [
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    FormsModule,
    MatSnackBarModule,
    CommonModule,
  ],
  declarations: [COMPONENTS],
  exports: [COMPONENTS],
})
export class ComponentsModule { }
