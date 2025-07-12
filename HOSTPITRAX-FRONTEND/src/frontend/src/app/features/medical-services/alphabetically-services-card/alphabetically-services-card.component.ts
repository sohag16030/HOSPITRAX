import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {MatAnchor, MatButton} from "@angular/material/button";
import {MatCard, MatCardContent} from "@angular/material/card";
import {Router, RouterLink} from "@angular/router";
import {NgForOf} from "@angular/common";
import {Subscription} from "rxjs";
import {ScrollService} from "../../../core/services/ScrollService";
import {PATH_VARIABLE} from "../../../core/constants/route.link";

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
export class AlphabeticallyServicesCardComponent {
  @Input() letter!: string;
  @Input() services: { name: string; url: string }[] = [];

  constructor(private router: Router) {
  }

  navigateTo(url: string): void {
    debugger
    this.router.navigate([PATH_VARIABLE.BASE + url]);
  }
}
