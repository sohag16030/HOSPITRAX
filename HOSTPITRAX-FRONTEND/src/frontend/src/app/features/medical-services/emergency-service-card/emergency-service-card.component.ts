import { Component } from '@angular/core';
import {MatCard, MatCardContent} from "@angular/material/card";
import {NgStyle} from "@angular/common";

@Component({
  selector: 'emergency-service-card',
  standalone: true,
  imports: [
    MatCard,
    MatCardContent,
    NgStyle
  ],
  templateUrl: './emergency-service-card.component.html',
  styleUrl: './emergency-service-card.component.css'
})
export class EmergencyServiceCardComponent {

}
