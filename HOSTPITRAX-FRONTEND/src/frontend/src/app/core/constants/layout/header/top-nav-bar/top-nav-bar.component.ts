import { Component } from '@angular/core';
import {MatMenu} from "@angular/material/menu";
import {MatIcon} from "@angular/material/icon";
import {MatToolbar} from "@angular/material/toolbar";

@Component({
  selector: 'top-nav-bar',
  standalone: true,
  imports: [
    MatMenu,
    MatIcon,
    MatToolbar
  ],
  templateUrl: './top-nav-bar.component.html',
  styleUrl: './top-nav-bar.component.css'
})
export class TopNavBarComponent {

}
