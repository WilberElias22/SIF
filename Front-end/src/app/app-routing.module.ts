import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginListComponent } from './components/login-list/login-list.component';
import { LoginFormComponent } from './components/login-form/login-form.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path:'login',
    component: LoginFormComponent
  },
  {
    path: 'login/edit/:id',
    component: LoginFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
