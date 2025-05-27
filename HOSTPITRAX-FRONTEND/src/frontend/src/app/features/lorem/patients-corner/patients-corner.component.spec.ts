import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientsCornerComponent } from './patients-corner.component';

describe('PatientsCornerComponent', () => {
  let component: PatientsCornerComponent;
  let fixture: ComponentFixture<PatientsCornerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PatientsCornerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PatientsCornerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
