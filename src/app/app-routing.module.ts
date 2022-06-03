import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsuarioComponent } from './components/dashboard/usuario/usuario.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch:'full' },
  { path:'login', component: LoginComponent },
  { path: 'dashboard', loadChildren:() => import('./components/dashboard/dashboard.module').then( x => x.DashboardModule) },
  { path: '**', redirectTo: 'login', pathMatch:'full' },
  { path: 'usuario/:id', component:UsuarioComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
