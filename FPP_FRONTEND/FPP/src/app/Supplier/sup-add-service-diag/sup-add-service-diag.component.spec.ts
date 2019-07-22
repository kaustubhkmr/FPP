import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupAddServiceDiagComponent } from './sup-add-service-diag.component';

describe('SupAddServiceDiagComponent', () => {
  let component: SupAddServiceDiagComponent;
  let fixture: ComponentFixture<SupAddServiceDiagComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupAddServiceDiagComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupAddServiceDiagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
