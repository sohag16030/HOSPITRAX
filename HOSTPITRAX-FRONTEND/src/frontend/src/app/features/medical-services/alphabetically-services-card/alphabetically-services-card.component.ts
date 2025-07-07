import { Component } from '@angular/core';
import {MatAnchor, MatButton} from "@angular/material/button";
import {MatCard, MatCardContent} from "@angular/material/card";

@Component({
  selector: 'alphabetically-services-card',
  standalone: true,
  imports: [
    MatButton,
    MatAnchor,
    MatCardContent,
    MatCard
  ],
  templateUrl: './alphabetically-services-card.component.html',
  styleUrl: './alphabetically-services-card.component.css'
})
export class AlphabeticallyServicesCardComponent {

}
