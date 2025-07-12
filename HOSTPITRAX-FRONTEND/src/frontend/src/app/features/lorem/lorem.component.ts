import {Component} from '@angular/core';
import {MatToolbar} from "@angular/material/toolbar";
import {MatButton} from "@angular/material/button";
import {MapAndDirectionsComponent} from "./map-and-directions/map-and-directions.component";
import {HeroBannerComponent} from "../../shared/hero-banner/hero-banner.component";
import {BreadcrumbNavigationComponent} from "../../shared/breadcrumb-navigation/breadcrumb-navigation.component";
import {LOREM_NAV_LINK} from "../../core/constants/constants";

@Component({
  selector: 'lorem',
  standalone: true,
  imports: [
    MatToolbar,
    MatButton,
    HeroBannerComponent,
    BreadcrumbNavigationComponent,
    MapAndDirectionsComponent,
    HeroBannerComponent,
    BreadcrumbNavigationComponent
  ],
  templateUrl: './lorem.component.html',
  styleUrl: './lorem.component.css'
})
export class LoremComponent {
  protected readonly LOREM_NAV_LINK = LOREM_NAV_LINK;
}
