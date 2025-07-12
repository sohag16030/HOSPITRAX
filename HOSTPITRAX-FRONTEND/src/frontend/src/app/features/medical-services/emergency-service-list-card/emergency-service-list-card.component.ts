import { Component } from '@angular/core';
import {EmergencyServiceCardComponent} from "../emergency-service-card/emergency-service-card.component";

@Component({
  selector: 'emergency-service-list-card',
  standalone: true,
  imports: [
    EmergencyServiceCardComponent
  ],
  templateUrl: './emergency-service-list-card.component.html',
  styleUrl: './emergency-service-list-card.component.css'
})
export class EmergencyServiceListCardComponent {

}
