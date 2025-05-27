import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapAndDirectionsComponent } from './map-and-directions.component';

describe('MapAndDirectionsComponent', () => {
  let component: MapAndDirectionsComponent;
  let fixture: ComponentFixture<MapAndDirectionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MapAndDirectionsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MapAndDirectionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
