import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {MatAnchor, MatButton} from "@angular/material/button";
import {MatCard, MatCardContent} from "@angular/material/card";
import {RouterLink} from "@angular/router";
import {NgForOf} from "@angular/common";
import {Subscription} from "rxjs";
import {ScrollService} from "../../../core/services/ScrollService";

@Component({
  selector: 'alphabetically-services-card',
  standalone: true,
  imports: [
    MatButton,
    MatAnchor,
    MatCardContent,
    MatCard,
    RouterLink,
    NgForOf
  ],
  templateUrl: './alphabetically-services-card.component.html',
  styleUrl: './alphabetically-services-card.component.css'
})
export class AlphabeticallyServicesCardComponent implements OnInit, OnDestroy {
  @Input() letter!: string;
  @Input() services: { name: string; route: string }[] = [];

  private subscription!: Subscription;

  constructor(private scrollService: ScrollService) {}

  ngOnInit(): void {
    this.subscription = this.scrollService.scrollToLetter$.subscribe(letter => {
      const element = document.getElementById('section-' + letter);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  getServicesByLetter(letter: string) {
    // your service logic
  }
}
