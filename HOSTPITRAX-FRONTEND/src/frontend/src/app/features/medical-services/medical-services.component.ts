import { Component } from '@angular/core';
import {SearchMedicalServicesComponent} from "./search-medical-services/search-medical-services.component";
import {PrimaryCareCardComponent} from "./primary-care-card/primary-care-card.component";
import {NgStyle} from "@angular/common";
import {ServiceCardComponent} from "./service-card/service-card.component";
import {ServiceListCardComponent} from "./service-list-card/service-list-card.component";
import {
  AlphabeticallyServicesCardComponent
} from "./alphabetically-services-card/alphabetically-services-card.component";

@Component({
  selector: 'app-medical-services',
  standalone: true,
  imports: [
    SearchMedicalServicesComponent,
    PrimaryCareCardComponent,
    NgStyle,
    ServiceCardComponent,
    ServiceListCardComponent,
    AlphabeticallyServicesCardComponent
  ],
  templateUrl: './medical-services.component.html',
  styleUrl: './medical-services.component.css'
})
export class MedicalServicesComponent {

}
