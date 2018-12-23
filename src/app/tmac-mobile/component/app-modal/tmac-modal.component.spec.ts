import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TmacModalComponent } from './tmac-modal.component';

describe('TmacModalComponent', () => {
  let component: TmacModalComponent;
  let fixture: ComponentFixture<TmacModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TmacModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TmacModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
