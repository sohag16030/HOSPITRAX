import {Component} from '@angular/core';
import {MatIcon} from "@angular/material/icon";
import {MatButton} from "@angular/material/button";
import {NgStyle} from "@angular/common";
import {RouterLink} from "@angular/router";
import {ROUTE_LINK} from "../../../route.link";

@Component({
  selector: 'main-navigation',
  standalone: true,
  imports: [
    MatIcon,
    MatButton,
    NgStyle,
    RouterLink
  ],
  templateUrl: './main-navigation.component.html',
  styleUrl: './main-navigation.component.css'
})
export class MainNavigationComponent {

  protected readonly ROUTE_LINK = ROUTE_LINK;
}
