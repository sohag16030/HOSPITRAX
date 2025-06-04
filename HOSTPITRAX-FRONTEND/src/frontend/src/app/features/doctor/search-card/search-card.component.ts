import { Component } from '@angular/core';
import {MatIcon} from "@angular/material/icon";
import {NgStyle} from "@angular/common";
import {MatCard} from "@angular/material/card";

@Component({
  selector: 'search-card',
  standalone: true,
  imports: [
    MatIcon,
    NgStyle,
    MatCard
  ],
  templateUrl: './search-card.component.html',
  styleUrl: './search-card.component.css'
})
export class SearchCardComponent {

}
