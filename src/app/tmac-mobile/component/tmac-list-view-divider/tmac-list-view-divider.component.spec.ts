import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TmacListViewDividerComponent } from './tmac-list-view-divider.component';

describe('TmacListViewDividerComponent', () => {
  let component: TmacListViewDividerComponent;
  let fixture: ComponentFixture<TmacListViewDividerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TmacListViewDividerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TmacListViewDividerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
