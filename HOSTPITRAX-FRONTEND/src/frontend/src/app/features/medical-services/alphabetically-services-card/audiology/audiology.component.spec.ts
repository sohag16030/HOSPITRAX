import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AudiologyComponent } from './audiology.component';

describe('AudiologyComponent', () => {
  let component: AudiologyComponent;
  let fixture: ComponentFixture<AudiologyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AudiologyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AudiologyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
