import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class HeaderComponent {
  isLogoutPopupVisible = false;
  isMobileMenuOpen = false;

  constructor(private router: Router) {}

  handleLogout() {
    this.isLogoutPopupVisible = false;
    localStorage.setItem('token-admin', '');
    this.router.navigate(['/login']);
  }
}
