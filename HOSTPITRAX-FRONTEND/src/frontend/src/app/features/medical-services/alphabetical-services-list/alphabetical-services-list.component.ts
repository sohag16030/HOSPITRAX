import { Component } from '@angular/core';
import {
  AlphabeticallyServicesCardComponent
} from "../alphabetically-services-card/alphabetically-services-card.component";
import {NgClass, NgForOf} from "@angular/common";
import {ALL_MEDICAL_SERVICES, LETTERS} from "../../../core/constants/constants";
import {MedicalService} from "../../../core/models/MedicalService";

@Component({
  selector: 'app-alphabetical-services-list',
  standalone: true,
  imports: [
    AlphabeticallyServicesCardComponent,
    NgForOf,
    NgClass
  ],
  templateUrl: './alphabetical-services-list.component.html',
  styleUrl: './alphabetical-services-list.component.css'
})
export class AlphabeticalServicesListComponent {
  readonly allServices: MedicalService[] = ALL_MEDICAL_SERVICES;
  readonly letters: string[] = LETTERS;

  getServicesByLetter(letter: string): MedicalService[] {
    return this.allServices.filter((service: MedicalService) => service.name.startsWith(letter));
  }
}
