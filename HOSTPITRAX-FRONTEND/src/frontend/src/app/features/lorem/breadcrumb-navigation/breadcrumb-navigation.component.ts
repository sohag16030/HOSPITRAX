import {Component, ViewEncapsulation} from '@angular/core';
import {MatCard, MatCardContent} from "@angular/material/card";

@Component({
  selector: 'breadcrumb-navigation',
  standalone: true,
  imports: [
    MatCardContent,
    MatCard
  ],
  templateUrl: './breadcrumb-navigation.component.html',
  styleUrl: './breadcrumb-navigation.component.css',
})
export class BreadcrumbNavigationComponent {

}
