import { Component } from '@angular/core';
import {MatIcon} from "@angular/material/icon";
import {MatButton} from "@angular/material/button";
import {NgStyle} from "@angular/common";

@Component({
  selector: 'main-navigation',
  standalone: true,
  imports: [
    MatIcon,
    MatButton,
    NgStyle
  ],
  templateUrl: './main-navigation.component.html',
  styleUrl: './main-navigation.component.css'
})
export class MainNavigationComponent {

}
