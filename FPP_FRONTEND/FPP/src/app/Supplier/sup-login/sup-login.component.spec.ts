import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupLoginComponent } from './sup-login.component';

describe('SupLoginComponent', () => {
  let component: SupLoginComponent;
  let fixture: ComponentFixture<SupLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
