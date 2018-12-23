import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TmacRefresherComponent } from './tmac-refresher.component';

describe('TmacRefresherComponent', () => {
  let component: TmacRefresherComponent;
  let fixture: ComponentFixture<TmacRefresherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TmacRefresherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TmacRefresherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
