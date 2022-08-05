import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridIlustracionesComponent } from './grid-ilustraciones.component';

describe('GridIlustracionesComponent', () => {
  let component: GridIlustracionesComponent;
  let fixture: ComponentFixture<GridIlustracionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GridIlustracionesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GridIlustracionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
