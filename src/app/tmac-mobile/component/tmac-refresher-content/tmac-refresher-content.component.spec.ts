import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TmacRefresherContentComponent } from './tmac-refresher-content.component';

describe('TmacRefresherContentComponent', () => {
  let component: TmacRefresherContentComponent;
  let fixture: ComponentFixture<TmacRefresherContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TmacRefresherContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TmacRefresherContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
