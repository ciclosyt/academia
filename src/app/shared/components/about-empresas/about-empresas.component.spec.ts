import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutEmpresasComponent } from './about-empresas.component';

describe('AboutEmpresasComponent', () => {
  let component: AboutEmpresasComponent;
  let fixture: ComponentFixture<AboutEmpresasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutEmpresasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutEmpresasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
