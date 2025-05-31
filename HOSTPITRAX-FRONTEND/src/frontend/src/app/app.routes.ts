import { Routes } from '@angular/router';
import {ROUTE_LINK} from "./core/constants/route.link";
import {LoremComponent} from "./features/lorem/lorem.component";

export const routes: Routes = [
  {
    path: ROUTE_LINK.HOME.link,
    component: LoremComponent
  },
  {
    path: '',
    redirectTo: ROUTE_LINK.HOME.link,
    pathMatch: 'full'
  }
];
