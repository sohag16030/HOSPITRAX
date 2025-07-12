import {Routes} from '@angular/router';
import {ROUTE_LINK} from "./core/constants/route.link";
import {LoremComponent} from "./features/lorem/lorem.component";
import {DoctorComponent} from "./features/doctor/doctor.component";
import {MedicalServicesComponent} from "./features/medical-services/medical-services.component";
import {
  AdolescentEpilepsyCareComponent
} from "./features/medical-services/alphabetically-services-card/adolescent-epilepsy-care/adolescent-epilepsy-care.component";
import {
  AudiologyComponent
} from "./features/medical-services/alphabetically-services-card/audiology/audiology.component";

export const routes: Routes = [
  {
    path: '',
    redirectTo: ROUTE_LINK.HOME.link,
    pathMatch: 'full'
  },
  {
    path: ROUTE_LINK.HOME.link,
    component: LoremComponent
  },
  {
    path: ROUTE_LINK.FIND_A_DOCTOR.link,
    component: DoctorComponent
  },
  {
    path: ROUTE_LINK.MEDICAL_SERVICES.link, children: [
      {path: '', component: MedicalServicesComponent},
      {path: ROUTE_LINK.ADOLESCENT_EPILEPSY_CARE.link, component: AdolescentEpilepsyCareComponent},
      {path: ROUTE_LINK.AUDIOLOGY.link, component: AudiologyComponent},
    ]
  },
];
