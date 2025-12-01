import { Component, Input } from '@angular/core';
import { ISidebarItem } from '../../../models/sidebar.model';

@Component({
  selector: 'app-sidebar-item',
  standalone: false,
  templateUrl: './sidebar-item.html',
  styleUrl: './sidebar-item.css',
})
export class SidebarItemComponent {
  @Input() item!: ISidebarItem;
}
