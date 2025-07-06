import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimaryCareCardComponent } from './primary-care-card.component';

describe('PrimaryCareCardComponent', () => {
  let component: PrimaryCareCardComponent;
  let fixture: ComponentFixture<PrimaryCareCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrimaryCareCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrimaryCareCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
