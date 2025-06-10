import { Component } from '@angular/core';
import {SearchCardComponent} from "./search-card/search-card.component";
import {DoctorListComponent} from "./doctor-list/doctor-list.component";

@Component({
  selector: 'app-doctor',
  standalone: true,
    imports: [
        SearchCardComponent,
        DoctorListComponent
    ],
  templateUrl: './doctor.component.html',
  styleUrl: './doctor.component.css'
})
export class DoctorComponent {

}
