import { Component, Input } from '@angular/core';
import { ISidebarItem } from '../../../models/sidebar.model';

@Component({
  selector: 'app-admin-sidebar-item',
  standalone: false,
  templateUrl: './admin-sidebar-item.html',
  styleUrl: './admin-sidebar-item.css',
})
export class AdminSidebarItem {
  @Input() item!: ISidebarItem;
}
