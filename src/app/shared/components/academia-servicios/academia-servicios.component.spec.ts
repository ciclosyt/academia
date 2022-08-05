import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcademiaServiciosComponent } from './academia-servicios.component';

describe('AcademiaServiciosComponent', () => {
  let component: AcademiaServiciosComponent;
  let fixture: ComponentFixture<AcademiaServiciosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcademiaServiciosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AcademiaServiciosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
