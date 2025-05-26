import { Routes } from '@angular/router';
import {HomeComponent} from "./features/home/home.component";
import {ROUTE_LINK} from "./core/constants/route.link";

export const routes: Routes = [
  {
    path: ROUTE_LINK.HOME.link,
    component: HomeComponent
  },
  {
    path: '',
    redirectTo: ROUTE_LINK.HOME.link,
    pathMatch: 'full'
  }
];
