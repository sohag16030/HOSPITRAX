import { Component } from '@angular/core';
import {MatIcon} from "@angular/material/icon";
import {BreadcrumbNavigationComponent} from "../breadcrumb-navigation/breadcrumb-navigation.component";

@Component({
  selector: 'hero-banner',
  standalone: true,
  imports: [
    MatIcon,
    BreadcrumbNavigationComponent
  ],
  templateUrl: './hero-banner.component.html',
  styleUrl: './hero-banner.component.css'
})
export class HeroBannerComponent {

}
