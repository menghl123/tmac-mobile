import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TmacActionSheetsComponent } from './tmac-action-sheets.component';

describe('TmacActionSheetsComponent', () => {
  let component: TmacActionSheetsComponent;
  let fixture: ComponentFixture<TmacActionSheetsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TmacActionSheetsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TmacActionSheetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
