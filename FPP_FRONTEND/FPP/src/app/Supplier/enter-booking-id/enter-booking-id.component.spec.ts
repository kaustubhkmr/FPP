import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnterBookingIdComponent } from './enter-booking-id.component';

describe('EnterBookingIdComponent', () => {
  let component: EnterBookingIdComponent;
  let fixture: ComponentFixture<EnterBookingIdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnterBookingIdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnterBookingIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
