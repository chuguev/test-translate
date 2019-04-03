import { NgModule } from '@angular/core';
import { FooterComponent } from './footer/footer.component';
import { MatCardModule } from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HeaderComponent } from '@app/shared/layout/header/header.component';

@NgModule({
  imports: [
    MatCardModule,
    FlexLayoutModule,
  ],
  exports: [
    FooterComponent,
    HeaderComponent,
  ],
  declarations: [
    FooterComponent,
    HeaderComponent,
  ]
})
export class LayoutModule { }
