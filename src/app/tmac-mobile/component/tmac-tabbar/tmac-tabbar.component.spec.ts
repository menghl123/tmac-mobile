import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TmacTabbarComponent } from './tmac-tabbar.component';

describe('TmacTabbarComponent', () => {
  let component: TmacTabbarComponent;
  let fixture: ComponentFixture<TmacTabbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TmacTabbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TmacTabbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
