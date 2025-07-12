import { Component } from '@angular/core';
import {BreadcrumbNavigationComponent} from "../../../../shared/breadcrumb-navigation/breadcrumb-navigation.component";
import {HeroBannerComponent} from "../../../../shared/hero-banner/hero-banner.component";
import {MapAndDirectionsComponent} from "../../../lorem/map-and-directions/map-and-directions.component";
import {ADOLESCENT_EPILEPSY_CARE_NAV_LINK} from "../../../../core/constants/constants";

@Component({
  selector: 'app-adolescent-epilepsy-care',
  standalone: true,
  imports: [
    BreadcrumbNavigationComponent,
    HeroBannerComponent,
    MapAndDirectionsComponent
  ],
  templateUrl: './adolescent-epilepsy-care.component.html',
  styleUrl: './adolescent-epilepsy-care.component.css'
})
export class AdolescentEpilepsyCareComponent {
  protected readonly ADOLESCENT_EPILEPSY_CARE_NAV_LINK = ADOLESCENT_EPILEPSY_CARE_NAV_LINK;
}
