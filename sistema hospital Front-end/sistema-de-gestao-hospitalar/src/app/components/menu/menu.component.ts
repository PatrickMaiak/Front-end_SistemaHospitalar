import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'] // corrigido: era "styleUrl"
})
export class MenuComponent {
  sidebarAberta = false;

  toggleSidebar() {
    this.sidebarAberta = !this.sidebarAberta;
  }
}
