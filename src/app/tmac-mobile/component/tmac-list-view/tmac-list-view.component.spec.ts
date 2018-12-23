import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TmacListViewComponent } from './tmac-list-view.component';

describe('TmacListViewComponent', () => {
  let component: TmacListViewComponent;
  let fixture: ComponentFixture<TmacListViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TmacListViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TmacListViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
