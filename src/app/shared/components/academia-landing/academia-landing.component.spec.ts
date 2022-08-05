import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcademiaLandingComponent } from './academia-landing.component';

describe('AcademiaLandingComponent', () => {
  let component: AcademiaLandingComponent;
  let fixture: ComponentFixture<AcademiaLandingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcademiaLandingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AcademiaLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
