import { Component } from '@angular/core';
import { Role } from '../../../models/role/role';
import { User } from '../../../models/user/user';

@Component({
  selector: 'app-doctor-list',
  imports: [],
  templateUrl: './doctor-list.component.html',
  styleUrl: './doctor-list.component.css'
})
export class DoctorListComponent {

  lista: User[]=[];
  constructor(){
    const doctorRole = new Role();

    doctorRole.id = 1;
    doctorRole.name = 'doctor';
    
    this.lista.push(new User(1,'DrPatrick','patrickmaiakremer@gmail.com',doctorRole,'doctor'));
  }

}
