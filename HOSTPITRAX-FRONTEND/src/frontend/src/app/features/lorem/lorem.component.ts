import { Component } from '@angular/core';
import {MatToolbar} from "@angular/material/toolbar";
import {MatButton} from "@angular/material/button";
import {HeroBannerComponent} from "./hero-banner/hero-banner.component";
import {BreadcrumbNavigationComponent} from "./breadcrumb-navigation/breadcrumb-navigation.component";
import {MapAndDirectionsComponent} from "./map-and-directions/map-and-directions.component";

@Component({
  selector: 'lorem',
  standalone: true,
  imports: [
    MatToolbar,
    MatButton,
    HeroBannerComponent,
    BreadcrumbNavigationComponent,
    MapAndDirectionsComponent
  ],
  templateUrl: './lorem.component.html',
  styleUrl: './lorem.component.css'
})
export class LoremComponent {

}
