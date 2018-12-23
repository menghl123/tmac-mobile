import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RefresherBasicComponent } from './refresher-basic.component';

describe('RefresherBasicComponent', () => {
  let component: RefresherBasicComponent;
  let fixture: ComponentFixture<RefresherBasicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RefresherBasicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RefresherBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
