import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {path: '', loadChildren: () => import('./patient/patient.routes').then(r => r.patientRoutes)},
  {path: 'devices', loadChildren: () => import('./device/device.routes').then(r => r.deviceRoutes)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
