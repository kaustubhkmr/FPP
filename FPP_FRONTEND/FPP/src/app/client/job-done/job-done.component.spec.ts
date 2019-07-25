import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JobDoneComponent } from './job-done.component';

describe('JobDoneComponent', () => {
  let component: JobDoneComponent;
  let fixture: ComponentFixture<JobDoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobDoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobDoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
