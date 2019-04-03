import { ComponentsModule } from '@app/+main/components';
import { MainComponent } from '@app/+main/main.component';

import { FlexLayoutModule } from '@angular/flex-layout';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    MainComponent,
  ],
  imports: [
    ComponentsModule,
    CommonModule,
    FlexLayoutModule,
  ],
  exports: [
    MainComponent,
    ComponentsModule,
  ],
  providers: [],
})
export class MainModule { }
