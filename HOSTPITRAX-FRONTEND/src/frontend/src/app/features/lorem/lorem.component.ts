import { Component } from '@angular/core';
import {MatToolbar} from "@angular/material/toolbar";
import {MatButton} from "@angular/material/button";
import {HeroBannerComponent} from "./hero-banner/hero-banner.component";

@Component({
  selector: 'lorem',
  standalone: true,
    imports: [
        MatToolbar,
        MatButton,
        HeroBannerComponent
    ],
  templateUrl: './lorem.component.html',
  styleUrl: './lorem.component.css'
})
export class LoremComponent {

}
