import { Component } from '@angular/core';
import {TopNavBarComponent} from "./top-nav-bar/top-nav-bar.component";
import {MainNavigationComponent} from "./main-navigation/main-navigation.component";

@Component({
  selector: 'hospitrax-header',
  standalone: true,
  imports: [
    TopNavBarComponent,
    MainNavigationComponent
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

}
