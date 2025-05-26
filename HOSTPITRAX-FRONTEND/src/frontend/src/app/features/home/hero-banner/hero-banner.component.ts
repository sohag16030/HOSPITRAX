import { Component } from '@angular/core';
import {MatIcon} from "@angular/material/icon";

@Component({
  selector: 'hero-banner',
  standalone: true,
  imports: [
    MatIcon
  ],
  templateUrl: './hero-banner.component.html',
  styleUrl: './hero-banner.component.css'
})
export class HeroBannerComponent {

}
