import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeeCustDetailsComponent } from './see-cust-details.component';

describe('SeeCustDetailsComponent', () => {
  let component: SeeCustDetailsComponent;
  let fixture: ComponentFixture<SeeCustDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeeCustDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeeCustDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
