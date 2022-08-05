import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LottieServiceComponent } from './lottie-service.component';

describe('LottieServiceComponent', () => {
  let component: LottieServiceComponent;
  let fixture: ComponentFixture<LottieServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LottieServiceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LottieServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
