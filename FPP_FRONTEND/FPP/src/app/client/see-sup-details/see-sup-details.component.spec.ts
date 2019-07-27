import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeeSupDetailsComponent } from './see-sup-details.component';

describe('SeeSupDetailsComponent', () => {
  let component: SeeSupDetailsComponent;
  let fixture: ComponentFixture<SeeSupDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeeSupDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeeSupDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
