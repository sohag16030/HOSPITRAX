import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicalHelpCardComponent } from './medical-help-card.component';

describe('MedicalHelpCardComponent', () => {
  let component: MedicalHelpCardComponent;
  let fixture: ComponentFixture<MedicalHelpCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MedicalHelpCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MedicalHelpCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
