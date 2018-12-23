import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TmacListViewItemComponent } from './tmac-list-view-item.component';

describe('TmacListViewItemComponent', () => {
  let component: TmacListViewItemComponent;
  let fixture: ComponentFixture<TmacListViewItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TmacListViewItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TmacListViewItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
