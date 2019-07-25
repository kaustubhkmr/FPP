import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JobPendingComponent } from './job-pending.component';

describe('JobPendingComponent', () => {
  let component: JobPendingComponent;
  let fixture: ComponentFixture<JobPendingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobPendingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobPendingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
