import {Routes} from "@angular/router";

export const appRoutes: Routes = [
  {path: '', loadChildren: () => import('./patient/patient.routes').then(r => r.patientRoutes)},
  {path: '**', redirectTo: ''}
];
