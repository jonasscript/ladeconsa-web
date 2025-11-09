import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  isMenuOpen = false;

  menuItems = [
    { label: 'Inicio', route: '/home', active: true },
    { label: 'Nosotros', route: '/about', active: false },
    { label: 'Servicios', route: '/services', active: false },
    { label: 'Proyectos', route: '/projects', active: false },
    { label: 'Blog', route: '/blog', active: false },
    { label: 'Contacto', route: '/contact', active: false }
  ];

  ngOnInit() {
    // Update active state based on current route
    this.updateActiveMenuItem();
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu() {
    this.isMenuOpen = false;
  }

  navigateTo(route: string) {
    this.closeMenu();
    // Update active state
    for (const item of this.menuItems) {
      item.active = item.route === route;
    }
  }

  private updateActiveMenuItem() {
    // This would typically use Router to get current route
    // For now, we'll set home as active by default
    for (const item of this.menuItems) {
      item.active = item.route === '/home';
    }
  }
}