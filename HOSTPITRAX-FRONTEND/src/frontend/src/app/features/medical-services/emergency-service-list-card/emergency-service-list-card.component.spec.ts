import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmergencyServiceListCardComponent } from './emergency-service-list-card.component';

describe('ServiceListCardComponent', () => {
  let component: EmergencyServiceListCardComponent;
  let fixture: ComponentFixture<EmergencyServiceListCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmergencyServiceListCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmergencyServiceListCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
