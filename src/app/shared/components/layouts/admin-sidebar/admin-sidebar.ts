import { Component } from '@angular/core';
import { ISidebarItem } from '../../../models/sidebar.model';

@Component({
  selector: 'app-admin-sidebar',
  standalone: false,
  templateUrl: './admin-sidebar.html',
  styleUrl: './admin-sidebar.css',
})
export class AdminSidebar {
  sidebarItems: ISidebarItem[] = [
    { title: 'Dashboard', icon: 'heroChartBarSolid', href: '/admin/dashboard' },
    { title: 'Organisations', icon: 'heroBuildingOffice2Solid', href: '/admin/organisations' },
    { title: 'Roles', icon: 'heroKeySolid', href: '/admin/roles' },
  ];
}
