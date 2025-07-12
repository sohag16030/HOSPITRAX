import {Component, Input, ViewEncapsulation} from '@angular/core';
import {MatCard, MatCardContent} from "@angular/material/card";
import {NavLink} from "../../core/models/models";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'breadcrumb-navigation',
  standalone: true,
  imports: [
    MatCardContent,
    MatCard,
    NgForOf
  ],
  templateUrl: './breadcrumb-navigation.component.html',
  styleUrl: './breadcrumb-navigation.component.css',
})
export class BreadcrumbNavigationComponent {
  @Input() navLinks: NavLink[] = [];
}
