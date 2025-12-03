import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Login } from './auth/pages/login/login';
import { Register } from './auth/pages/register/register';
import { Roles } from './roles/pages/roles/roles';
import { Organisations } from './organisations/pages/organisations/organisations';
import { OrganisationDetail } from './organisations/pages/organisation-detail/organisation-detail';
import { Users } from './users/pages/users/users';
import { UserDetail } from './users/pages/user-detail/user-detail';
import { Notifications } from './notifications/pages/notifications/notifications';
import { NotFound } from './not-found/pages/not-found/not-found';
import { Dashboard } from './dashboard/pages/dashboard/dashboard';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared-module';

@NgModule({
  declarations: [
    Login,
    Register,
    Roles,
    Organisations,
    OrganisationDetail,
    Users,
    UserDetail,
    Notifications,
    NotFound,
    Dashboard,
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule
  ],
  exports: [
    Login,
    Register,
    Roles,
    Organisations,
    OrganisationDetail,
    Users,
    UserDetail,
    Notifications,
    NotFound,
    Dashboard,
  ]
})
export class FeaturesModule { }
