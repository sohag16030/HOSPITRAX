import { Component } from '@angular/core';
import {MatCard, MatCardContent} from "@angular/material/card";
import {MatButton} from "@angular/material/button";
import {NgStyle} from "@angular/common";

@Component({
  selector: 'map-and-directions',
  standalone: true,
  imports: [
    MatCard,
    MatCardContent,
    MatButton,
    NgStyle
  ],
  templateUrl: './map-and-directions.component.html',
  styleUrl: './map-and-directions.component.css'
})
export class MapAndDirectionsComponent {

}
