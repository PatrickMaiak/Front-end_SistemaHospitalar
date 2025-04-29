import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-menu',
  imports: [CommonModule],
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'] 
})
export class MenuComponent {

  role: string | null = null;

  ngOnInit(): void {
    this.role = localStorage.getItem('role');
  }

  sidebarAberta = false;

  toggleSidebar() {
    this.sidebarAberta = !this.sidebarAberta;
  }
}
