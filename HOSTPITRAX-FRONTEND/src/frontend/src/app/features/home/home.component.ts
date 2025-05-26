import { Component } from '@angular/core';
import {MatToolbar} from "@angular/material/toolbar";
import {MatButton} from "@angular/material/button";
import {HeroBannerComponent} from "./hero-banner/hero-banner.component";

@Component({
  selector: 'app-reagan',
  standalone: true,
    imports: [
        MatToolbar,
        MatButton,
        HeroBannerComponent
    ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
