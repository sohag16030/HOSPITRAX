import { Component } from '@angular/core';
import {ServiceCardComponent} from "../service-card/service-card.component";

@Component({
  selector: 'service-list-card',
  standalone: true,
  imports: [
    ServiceCardComponent
  ],
  templateUrl: './service-list-card.component.html',
  styleUrl: './service-list-card.component.css'
})
export class ServiceListCardComponent {

}
