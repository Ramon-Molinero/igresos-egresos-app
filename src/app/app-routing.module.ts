import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  {path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'ingresos-egresos', loadChildren: () => import('./ingreso-egreso/ingreso-egreso.module').then(m => m.IngresoEgresoModule)},
  {path: '', component: DashboardComponent},
  {path: '**', redirectTo: '', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
