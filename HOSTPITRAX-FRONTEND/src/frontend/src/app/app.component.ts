import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MainLayoutComponent} from "./core/constants/layout/main-layout.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MainLayoutComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Hospitrax';
}
