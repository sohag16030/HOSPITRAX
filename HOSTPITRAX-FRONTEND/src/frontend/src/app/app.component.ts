import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MapAndDirectionsComponent} from "./features/lorem/map-and-directions/map-and-directions.component";
import {HeaderComponent} from "./core/constants/layout/header/header.component";
import {FooterComponent} from "./core/constants/layout/footer/footer.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MapAndDirectionsComponent, HeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Hospitrax';
}
