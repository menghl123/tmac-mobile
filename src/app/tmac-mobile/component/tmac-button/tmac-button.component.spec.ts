import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TmacButtonComponent } from './tmac-button.component';

describe('TmacButtonComponent', () => {
  let component: TmacButtonComponent;
  let fixture: ComponentFixture<TmacButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TmacButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TmacButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
