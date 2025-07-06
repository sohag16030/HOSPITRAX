import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchMedicalServicesComponent } from './search-medical-services.component';

describe('SearchMedicalServicesComponent', () => {
  let component: SearchMedicalServicesComponent;
  let fixture: ComponentFixture<SearchMedicalServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SearchMedicalServicesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchMedicalServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
