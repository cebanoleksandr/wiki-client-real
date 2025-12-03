import { Component } from '@angular/core';
import { ISidebarItem } from '../../../models/sidebar.model';

@Component({
  selector: 'app-sidebar',
  standalone: false,
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css',
})
export class SidebarComponent {
  sidebarItems: ISidebarItem[] = [
    { title: 'Dashboard', icon: 'heroChartBarSolid', href: '/dashboard' },
    { title: 'Organisations', icon: 'heroBuildingOffice2Solid', href: '/organisations' },
    { title: 'Roles', icon: 'heroKeySolid', href: '/roles' },
  ];
}
