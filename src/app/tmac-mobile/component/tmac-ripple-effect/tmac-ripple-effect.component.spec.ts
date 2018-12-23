import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TmacRippleEffectComponent } from './tmac-ripple-effect.component';

describe('TmacRippleEffectComponent', () => {
  let component: TmacRippleEffectComponent;
  let fixture: ComponentFixture<TmacRippleEffectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TmacRippleEffectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TmacRippleEffectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
