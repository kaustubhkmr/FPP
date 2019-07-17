import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupDashboardComponent } from './sup-dashboard.component';

describe('SupDashboardComponent', () => {
  let component: SupDashboardComponent;
  let fixture: ComponentFixture<SupDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
