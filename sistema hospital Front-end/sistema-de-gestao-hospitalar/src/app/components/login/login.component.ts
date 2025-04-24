import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  email!: string;
  password!:string;
  router = inject(Router);

  login(){
    if(this.email == 'admin' && this.password == 'admin'){
      this.router.navigate(['admin/dashboard'])
    }
    else if(this.email == 'patient' && this.password == 'patient'){
      this.router.navigate(['patient/home'])
    }
    else if(this.email == 'doctor' && this.password == 'doctor'){
      this.router.navigate(['doctor/home'])
    }
   
    else{
      alert("senha ou usuario incorretos")
    }
  }

}
