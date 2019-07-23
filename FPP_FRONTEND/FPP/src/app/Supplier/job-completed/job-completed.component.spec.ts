import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JobCompletedComponent } from './job-completed.component';

describe('JobCompletedComponent', () => {
  let component: JobCompletedComponent;
  let fixture: ComponentFixture<JobCompletedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobCompletedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobCompletedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
