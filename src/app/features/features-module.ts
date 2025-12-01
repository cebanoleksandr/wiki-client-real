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
import { AdminUserDetail } from './admin-user-detail/pages/admin-user-detail/admin-user-detail';
import { RouterModule } from '@angular/router';
import { AdminDashboard } from './admin-dashboard/pages/admin-dashboard/admin-dashboard';

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
    AdminUserDetail,
    AdminDashboard
  ],
  imports: [
    CommonModule,
    RouterModule
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
    AdminUserDetail
  ]
})
export class FeaturesModule { }
