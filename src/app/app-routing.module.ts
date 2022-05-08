import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './shared/services/auth.guard';
import { AntiauthGuard } from './shared/services/antiauth.guard';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'insurance', loadChildren: () => import('./pages/insurance/insurance.module').then(m => m.InsuranceModule), canActivate: [AuthGuard] },
  { path: 'list', loadChildren: () => import('./pages/list/list.module').then(m => m.ListModule), canActivate: [AuthGuard] },
  { path: 'login', loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule), canActivate: [AntiauthGuard] },
  { path: 'register', loadChildren: () => import('./pages/register/register.module').then(m => m.RegisterModule), canActivate: [AntiauthGuard] },
  { path: 'error404', loadChildren: () => import('./pages/error404/error404.module').then(m => m.Error404Module) },
  { path: '**', redirectTo: '/error404' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }