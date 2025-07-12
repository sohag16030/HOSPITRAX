import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdolescentEpilepsyCareComponent } from './adolescent-epilepsy-care.component';

describe('AdolescentEpilepsyCareComponent', () => {
  let component: AdolescentEpilepsyCareComponent;
  let fixture: ComponentFixture<AdolescentEpilepsyCareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdolescentEpilepsyCareComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdolescentEpilepsyCareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
