import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlphabeticalServicesListComponent } from './alphabetical-services-list.component';

describe('AlphabeticalServicesListComponent', () => {
  let component: AlphabeticalServicesListComponent;
  let fixture: ComponentFixture<AlphabeticalServicesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlphabeticalServicesListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlphabeticalServicesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
