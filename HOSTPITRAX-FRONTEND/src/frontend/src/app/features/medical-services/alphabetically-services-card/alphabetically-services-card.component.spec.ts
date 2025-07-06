import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlphabeticallyServicesCardComponent } from './alphabetically-services-card.component';

describe('AlphabeticallyServicesCardComponent', () => {
  let component: AlphabeticallyServicesCardComponent;
  let fixture: ComponentFixture<AlphabeticallyServicesCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlphabeticallyServicesCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlphabeticallyServicesCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
