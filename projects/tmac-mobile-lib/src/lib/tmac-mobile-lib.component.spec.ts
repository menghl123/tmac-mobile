import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TmacMobileLibComponent } from './tmac-mobile-lib.component';

describe('TmacMobileLibComponent', () => {
  let component: TmacMobileLibComponent;
  let fixture: ComponentFixture<TmacMobileLibComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TmacMobileLibComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TmacMobileLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
