import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcademiaDiferenciaComponent } from './academia-diferencia.component';

describe('AcademiaDiferenciaComponent', () => {
  let component: AcademiaDiferenciaComponent;
  let fixture: ComponentFixture<AcademiaDiferenciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcademiaDiferenciaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AcademiaDiferenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
