import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListviewDemoComponent } from './listview-demo.component';

describe('ListviewDemoComponent', () => {
  let component: ListviewDemoComponent;
  let fixture: ComponentFixture<ListviewDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListviewDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListviewDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
