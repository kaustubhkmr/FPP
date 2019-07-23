import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JobActiveComponent } from './job-active.component';

describe('JobActiveComponent', () => {
  let component: JobActiveComponent;
  let fixture: ComponentFixture<JobActiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobActiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobActiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
