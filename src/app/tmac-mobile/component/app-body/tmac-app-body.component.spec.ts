import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TmacAppBodyComponent } from './tmac-app-body.component';

describe('TmacAppBodyComponent', () => {
  let component: TmacAppBodyComponent;
  let fixture: ComponentFixture<TmacAppBodyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TmacAppBodyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TmacAppBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
