import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthLayoutComponent } from './shared/components/layouts/auth-layout/auth-layout';
import { Login } from './features/auth/pages/login/login';
import { Register } from './features/auth/pages/register/register';
import { NotFound } from './features/not-found/pages/not-found/not-found';
import { MainLayoutComponent } from './shared/components/layouts/main-layout/main-layout';
import { Dashboard } from './features/dashboard/pages/dashboard/dashboard';
import { Roles } from './features/roles/pages/roles/roles';
import { Organisations } from './features/organisations/pages/organisations/organisations';
import { OrganisationDetail } from './features/organisations/pages/organisation-detail/organisation-detail';
import { Users } from './features/users/pages/users/users';
import { UserDetail } from './features/users/pages/user-detail/user-detail';

const routes: Routes = [
  {
    path: 'auth',
    component: AuthLayoutComponent,
    children: [
      { path: 'login', component: Login },
      { path: 'register', component: Register },
    ]
  },
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      { path: 'roles', component: Roles },
      { path: 'dashboard', component: Dashboard },
      { path: 'organisations', component: Organisations },
      { path: 'organisations/:id', component: OrganisationDetail },
      { path: 'users', component: Users },
      { path: 'users/:id', component: UserDetail },
      { path: '**', component: NotFound },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
