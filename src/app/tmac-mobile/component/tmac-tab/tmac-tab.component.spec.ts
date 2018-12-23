import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TmacTabComponent } from './tmac-tab.component';

describe('TmacTabComponent', () => {
  let component: TmacTabComponent;
  let fixture: ComponentFixture<TmacTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TmacTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TmacTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
