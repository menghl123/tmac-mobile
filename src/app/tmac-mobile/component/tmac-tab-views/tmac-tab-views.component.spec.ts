import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TmacTabViewsComponent } from './tmac-tab-views.component';

describe('TmacTabViewsComponent', () => {
  let component: TmacTabViewsComponent;
  let fixture: ComponentFixture<TmacTabViewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TmacTabViewsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TmacTabViewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
