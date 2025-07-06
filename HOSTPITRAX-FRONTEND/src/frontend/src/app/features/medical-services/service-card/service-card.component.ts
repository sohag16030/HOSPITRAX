import { Component } from '@angular/core';
import {MatCard, MatCardContent} from "@angular/material/card";
import {NgStyle} from "@angular/common";

@Component({
  selector: 'service-card',
  standalone: true,
  imports: [
    MatCard,
    MatCardContent,
    NgStyle
  ],
  templateUrl: './service-card.component.html',
  styleUrl: './service-card.component.css'
})
export class ServiceCardComponent {

}
