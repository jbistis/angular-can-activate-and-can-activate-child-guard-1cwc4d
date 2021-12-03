import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CanActivateGuard } from '../can-activate.guard';
import { CanActivateChildGuard } from '../can-activate-child.guard';
import { CanDeactivateGuard } from '../can-deactivate.guard';
import { CanLoadGuard } from '../can-load.guard';
import { UsersComponent } from '../users/users.component';
import { UserDetailsComponent } from '../users/user-details/user-details.component';
import { HomeComponent } from '../home/home.component';
import { FormComponent } from '../form/form.component';
import { PlaceholderComponent } from '../placeholder/placeholder.component';

const routes: Routes = [
  { 
    path: 'users', 
    component: UsersComponent, 
    children: [
      { path: ':id', component: UserDetailsComponent },
      { path: '', component: PlaceholderComponent }
    ],
    canActivate: [CanActivateGuard],
    canActivateChild: [CanActivateChildGuard],
  },
  { path: 'home', component: HomeComponent },
  { path: 'form', component: FormComponent, canDeactivate: [CanDeactivateGuard] },
  { path: 'dashboard', loadChildren: () => import('../dashboard/dashboard.module').then(m => m.DashboardModule), canLoad: [CanLoadGuard] },
  { path: '**', redirectTo: '/home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [CanActivateGuard, CanActivateChildGuard, CanDeactivateGuard, CanLoadGuard]
})
export class AppRoutingModule { }