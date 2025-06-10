import { Component } from '@angular/core';
import {MatCard, MatCardContent} from "@angular/material/card";
import {NgClass, NgStyle} from "@angular/common";
import {MatIcon} from "@angular/material/icon";

@Component({
  selector: 'doctor-details-card',
  standalone: true,
  imports: [
    MatCard,
    MatCardContent,
    NgStyle,
    MatIcon
  ],
  templateUrl: './doctor-details-card.component.html',
  styleUrl: './doctor-details-card.component.css'
})
export class DoctorDetailsCardComponent {

}
