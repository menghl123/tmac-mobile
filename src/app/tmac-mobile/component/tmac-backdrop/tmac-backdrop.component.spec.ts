import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TmacBackdropComponent } from './tmac-backdrop.component';

describe('TmacBackdropComponent', () => {
  let component: TmacBackdropComponent;
  let fixture: ComponentFixture<TmacBackdropComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TmacBackdropComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TmacBackdropComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
