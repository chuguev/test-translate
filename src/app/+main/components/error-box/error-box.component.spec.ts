import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ErrorBoxComponent } from '@app/+main/components/error-box/error-box.component';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

describe('ErrorBoxComponent', () => {
  let component: ErrorBoxComponent;
  let fixture: ComponentFixture<ErrorBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MatSnackBarModule,
      ],
      declarations: [ErrorBoxComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrorBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
