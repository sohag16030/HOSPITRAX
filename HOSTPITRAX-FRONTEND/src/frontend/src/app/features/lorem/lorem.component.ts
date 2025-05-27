import { Component } from '@angular/core';
import {MatToolbar} from "@angular/material/toolbar";
import {MatButton} from "@angular/material/button";
import {HeroBannerComponent} from "./hero-banner/hero-banner.component";
import {BreadcrumbNavigationComponent} from "./breadcrumb-navigation/breadcrumb-navigation.component";

@Component({
  selector: 'lorem',
  standalone: true,
  imports: [
    MatToolbar,
    MatButton,
    HeroBannerComponent,
    BreadcrumbNavigationComponent
  ],
  templateUrl: './lorem.component.html',
  styleUrl: './lorem.component.css'
})
export class LoremComponent {

}
