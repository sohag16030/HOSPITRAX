import { Component } from '@angular/core';
import {MatCard, MatCardContent} from "@angular/material/card";
import {NgStyle} from "@angular/common";
import {ScrollService} from "../../../core/services/ScrollService";

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
  constructor(private scrollService: ScrollService) {}

  onLetterClick(letter: string): void {
    this.scrollService.scrollToLetter(letter);
  }
}
