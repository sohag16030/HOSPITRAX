import { Component } from '@angular/core';
import {DoctorDetailsCardComponent} from "../doctor-details-card/doctor-details-card.component";

@Component({
  selector: 'doctor-list',
  standalone: true,
    imports: [
        DoctorDetailsCardComponent
    ],
  templateUrl: './doctor-list.component.html',
  styleUrl: './doctor-list.component.css'
})
export class DoctorListComponent {

}
