import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TmacAppBarComponent } from './tmac-app-bar.component';

describe('TmacAppBarComponent', () => {
  let component: TmacAppBarComponent;
  let fixture: ComponentFixture<TmacAppBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TmacAppBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TmacAppBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
