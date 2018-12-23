import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TmacIndicatorComponent } from './tmac-indicator.component';

describe('TmacIndicatorComponent', () => {
  let component: TmacIndicatorComponent;
  let fixture: ComponentFixture<TmacIndicatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TmacIndicatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TmacIndicatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
