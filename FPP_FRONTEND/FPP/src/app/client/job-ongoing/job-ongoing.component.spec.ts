import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JobOngoingComponent } from './job-ongoing.component';

describe('JobOngoingComponent', () => {
  let component: JobOngoingComponent;
  let fixture: ComponentFixture<JobOngoingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobOngoingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobOngoingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
