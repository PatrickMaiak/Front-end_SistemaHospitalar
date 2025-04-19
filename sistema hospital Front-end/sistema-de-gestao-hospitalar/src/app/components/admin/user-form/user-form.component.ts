import { Component } from '@angular/core';
import { RoleListComponent } from "../role-list/role-list.component";
@Component({
  selector: 'app-user-form',
  imports: [RoleListComponent],
  templateUrl: './user-form.component.html',
  styleUrl: './user-form.component.css'
})
export class UserFormComponent {

}
