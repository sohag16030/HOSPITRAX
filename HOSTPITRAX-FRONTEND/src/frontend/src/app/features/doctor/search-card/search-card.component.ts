import { Component } from '@angular/core';
import {MatIcon} from "@angular/material/icon";
import {NgStyle} from "@angular/common";
import {MatCard, MatCardContent} from "@angular/material/card";
import {FilterCardComponent} from "../filter-card/filter-card.component";
import {DoctorDetailsCardComponent} from "../doctor-details-card/doctor-details-card.component";

@Component({
  selector: 'search-card',
  standalone: true,
    imports: [
        MatIcon,
        NgStyle,
        MatCard,
        MatCardContent,
        FilterCardComponent,
        DoctorDetailsCardComponent
    ],
  templateUrl: './search-card.component.html',
  styleUrl: './search-card.component.css'
})
export class SearchCardComponent {

}
