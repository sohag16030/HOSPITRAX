import { Component } from '@angular/core';
import {SearchMedicalServicesComponent} from "./search-medical-services/search-medical-services.component";
import {PrimaryCareCardComponent} from "./primary-care-card/primary-care-card.component";
import {NgStyle} from "@angular/common";
import {EmergencyServiceCardComponent} from "./emergency-service-card/emergency-service-card.component";
import {EmergencyServiceListCardComponent} from "./emergency-service-list-card/emergency-service-list-card.component";
import {
  AlphabeticallyServicesCardComponent
} from "./alphabetically-services-card/alphabetically-services-card.component";
import {AlphabeticalServicesListComponent} from "./alphabetical-services-list/alphabetical-services-list.component";

@Component({
  selector: 'app-medical-services',
  standalone: true,
  imports: [
    SearchMedicalServicesComponent,
    PrimaryCareCardComponent,
    NgStyle,
    EmergencyServiceCardComponent,
    EmergencyServiceListCardComponent,
    AlphabeticallyServicesCardComponent,
    AlphabeticalServicesListComponent
  ],
  templateUrl: './medical-services.component.html',
  styleUrl: './medical-services.component.css'
})
export class MedicalServicesComponent {

}
