import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'shared-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css',
})
export class MenuComponent {
  public menuItems: MenuItem[] = [
    {
      label: 'Pipes de Ángular',
      icon: 'pi pi-desktop',
      items: [
        {
          label: 'Textos y Fechas',
          icon: 'pi pi-align-left',
          routerLink: '/',
        },
        { label: 'Números', icon: 'pi pi-dollar', routerLink: 'numbers' },
        { label: 'No comunes', icon: 'pi pi-globe', routerLink: 'uncommon' },
      ],
    },
    {
      label: 'Pipes personalizados',
      icon: 'pi pi-cog',
      routerLink: '/ordenar',
      items: [
        { label: 'Custom Pipes', icon: 'pi pi-sort', routerLink: '/custom' },
      ],
    },
  ];
}
