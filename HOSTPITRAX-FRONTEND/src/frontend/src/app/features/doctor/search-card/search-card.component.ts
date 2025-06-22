import { Component } from '@angular/core';
import {MatIcon} from "@angular/material/icon";
import {NgClass, NgStyle} from "@angular/common";
import {MatCard, MatCardContent} from "@angular/material/card";
import {FilterCardComponent} from "../filter-card/filter-card.component";
import {DoctorDetailsCardComponent} from "../doctor-details-card/doctor-details-card.component";
import {DoctorListComponent} from "../doctor-list/doctor-list.component";
import {MatButton} from "@angular/material/button";

@Component({
  selector: 'search-card',
  standalone: true,
  imports: [
    MatIcon,
    NgStyle,
    MatCard,
    MatCardContent,
    FilterCardComponent,
    DoctorDetailsCardComponent,
    DoctorListComponent,
    MatButton,
    NgClass
  ],
  templateUrl: './search-card.component.html',
  styleUrl: './search-card.component.css'
})
export class SearchCardComponent {
  selectedTab = 'all';
}
