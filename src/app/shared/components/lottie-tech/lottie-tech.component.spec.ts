import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LottieTechComponent } from './lottie-tech.component';

describe('LottieTechComponent', () => {
  let component: LottieTechComponent;
  let fixture: ComponentFixture<LottieTechComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LottieTechComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LottieTechComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
