import { Component } from '@angular/core';
import {BreadcrumbNavigationComponent} from "../../../../shared/breadcrumb-navigation/breadcrumb-navigation.component";
import {HeroBannerComponent} from "../../../../shared/hero-banner/hero-banner.component";
import {ADOLESCENT_EPILEPSY_CARE_NAV_LINK} from "../../../../core/constants/constants";

@Component({
  selector: 'app-audiology',
  standalone: true,
  imports: [
    BreadcrumbNavigationComponent,
    HeroBannerComponent
  ],
  templateUrl: './audiology.component.html',
  styleUrl: './audiology.component.css'
})
export class AudiologyComponent {
  protected readonly ADOLESCENT_EPILEPSY_CARE_NAV_LINK = ADOLESCENT_EPILEPSY_CARE_NAV_LINK;
}
