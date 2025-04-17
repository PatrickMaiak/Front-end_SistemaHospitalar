import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Role} from "../../../models/role/role";

@Component({
  selector: 'app-role-list',
  imports: [CommonModule],
  templateUrl: './role-list.component.html',
  styleUrl: './role-list.component.css'
})
export class RoleListComponent {

  lista: Role[] = [];

  constructor(){

    let role1: Role = new Role();
    role1.id = 1;
    role1.name="admin";

    let role2: Role = new Role();
    role2.id = 2;
    role2.name="doctor";

    let role3: Role = new Role();
    role3.id = 3;
    role3.name="patient";

    this.lista.push(role1);
    this.lista.push(role2);
    this.lista.push(role3);

  }

}
