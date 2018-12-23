import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TmacSideMenuComponent } from './tmac-side-menu.component';

describe('TmacSideMenuComponent', () => {
  let component: TmacSideMenuComponent;
  let fixture: ComponentFixture<TmacSideMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TmacSideMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TmacSideMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
