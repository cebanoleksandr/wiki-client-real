import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainLayoutComponent } from './components/layouts/main-layout/main-layout';
import { AuthLayoutComponent } from './components/layouts/auth-layout/auth-layout';
import { SidebarComponent } from './components/layouts/sidebar/sidebar';
import { SidebarItemComponent } from './components/layouts/sidebar-item/sidebar-item';
import { ButtonComponent } from './components/UI/button/button';
import { HeaderComponent } from './components/layouts/header/header';
import { NgIconsModule } from '@ng-icons/core';
import { RouterModule } from '@angular/router';
import { AdminLayout } from './components/layouts/admin-layout/admin-layout';
import { AdminSidebar } from './components/layouts/admin-sidebar/admin-sidebar';
import { AdminSidebarItem } from './components/layouts/admin-sidebar-item/admin-sidebar-item';
import { heroArrowRightStartOnRectangle, heroMagnifyingGlass } from '@ng-icons/heroicons/outline';
import { heroBars3Solid, heroBuildingOffice2Solid, heroChartBarSolid, heroHomeSolid, heroKeySolid } from '@ng-icons/heroicons/solid';
import { InputComponent } from './components/UI/input/input';

@NgModule({
  declarations: [
    MainLayoutComponent,
    AuthLayoutComponent,
    SidebarComponent,
    SidebarItemComponent,
    ButtonComponent,
    HeaderComponent,
    AdminLayout,
    AdminSidebar,
    AdminSidebarItem,
    InputComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    NgIconsModule.withIcons({ 
      heroBars3Solid,
      heroMagnifyingGlass,
      heroArrowRightStartOnRectangle,
      heroHomeSolid,
      heroBuildingOffice2Solid,
      heroKeySolid,
      heroChartBarSolid
    })
  ],
  exports: [
    MainLayoutComponent,
    AuthLayoutComponent,
    SidebarComponent,
    SidebarItemComponent,
    ButtonComponent,
    HeaderComponent,
    InputComponent
  ]
})
export class SharedModule { }
