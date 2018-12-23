import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TmacCardComponent } from './tmac-card.component';

describe('TmacCardComponent', () => {
  let component: TmacCardComponent;
  let fixture: ComponentFixture<TmacCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TmacCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TmacCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
