import { Component } from '@angular/core';
import {RouterOutlet} from "@angular/router";
import {HeaderComponent} from "./header/header.component";
import {FooterComponent} from "./footer/footer.component";
import {HeroBannerComponent} from "../../../features/lorem/hero-banner/hero-banner.component";
import {
  BreadcrumbNavigationComponent
} from "../../../features/lorem/breadcrumb-navigation/breadcrumb-navigation.component";

@Component({
  selector: 'main-layout',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    FooterComponent,
    HeroBannerComponent,
    BreadcrumbNavigationComponent
  ],
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.css'
})
export class MainLayoutComponent {

}
