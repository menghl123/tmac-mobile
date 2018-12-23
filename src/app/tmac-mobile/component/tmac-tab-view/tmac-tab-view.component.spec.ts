import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TmacTabViewComponent } from './tmac-tab-view.component';

describe('TmacTabViewComponent', () => {
  let component: TmacTabViewComponent;
  let fixture: ComponentFixture<TmacTabViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TmacTabViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TmacTabViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
