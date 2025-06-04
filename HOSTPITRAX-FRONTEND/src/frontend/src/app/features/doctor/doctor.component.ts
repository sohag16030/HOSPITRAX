import { Component } from '@angular/core';
import {SearchCardComponent} from "./search-card/search-card.component";

@Component({
  selector: 'app-doctor',
  standalone: true,
  imports: [
    SearchCardComponent
  ],
  templateUrl: './doctor.component.html',
  styleUrl: './doctor.component.css'
})
export class DoctorComponent {

}
