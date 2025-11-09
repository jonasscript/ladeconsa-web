import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MenubarModule } from 'primeng/menubar';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule, MenubarModule],
  template: `
    <p-menubar [model]="menuItems">
      <ng-template pTemplate="start">
        <div class="p-mr-2">
          <h3>Constructora XYZ</h3>
        </div>
      </ng-template>
    </p-menubar>
  `,
  styles: [`
    :host ::ng-deep .p-menubar {
      background-color: #007bff;
      border: none;
    }
    :host ::ng-deep .p-menubar .p-menuitem-link {
      color: white;
    }
    :host ::ng-deep .p-menubar .p-menuitem-link:hover {
      background-color: rgba(255, 255, 255, 0.1);
    }
  `]
})
export class NavbarComponent {
  menuItems: MenuItem[] = [
    {
      label: 'Inicio',
      routerLink: '/home'
    },
    {
      label: 'Proyectos',
      items: [
        {
          label: 'Edificaciones',
          routerLink: '/projects',
          queryParams: { category: 'edificaciones' }
        },
        {
          label: 'Casas',
          routerLink: '/projects',
          queryParams: { category: 'casas' }
        },
        {
          label: 'Remodelaciones',
          routerLink: '/projects',
          queryParams: { category: 'remodelaciones' }
        }
      ]
    },
    {
      label: 'Blog',
      routerLink: '/blog'
    },
    {
      label: 'Contacto',
      routerLink: '/contact'
    }
  ];
}