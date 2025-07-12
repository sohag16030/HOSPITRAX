import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmergencyServiceCardComponent } from './emergency-service-card.component';

describe('ServiceCardComponent', () => {
  let component: EmergencyServiceCardComponent;
  let fixture: ComponentFixture<EmergencyServiceCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmergencyServiceCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmergencyServiceCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
