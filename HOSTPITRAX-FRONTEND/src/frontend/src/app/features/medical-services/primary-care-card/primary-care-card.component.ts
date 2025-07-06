import { Component } from '@angular/core';
import {MatCard, MatCardContent} from "@angular/material/card";
import {NgStyle} from "@angular/common";

@Component({
  selector: 'primary-care-card',
  standalone: true,
  imports: [
    MatCard,
    MatCardContent,
    NgStyle
  ],
  templateUrl: './primary-care-card.component.html',
  styleUrl: './primary-care-card.component.css'
})
export class PrimaryCareCardComponent {

}
