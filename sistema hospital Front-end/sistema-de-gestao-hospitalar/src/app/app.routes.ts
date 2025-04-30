import { Routes } from '@angular/router';
import { DashboardComponent } from './components/admin/dashboard/dashboard.component';
import { DoctorListComponent } from './components/admin/doctor-list/doctor-list.component';
import { MedicineFormComponent } from './components/admin/medicine-form/medicine-form.component';
import { MedicineListComponent } from './components/admin/medicine-list/medicine-list.component';
import { PatientListComponent } from './components/admin/patient-list/patient-list.component';
import { RoleListComponent } from './components/admin/role-list/role-list.component';
import { UserFormComponent } from './components/admin/user-form/user-form.component';
import { HomeComponent } from './components/doctor/home/home.component';
import { PrescriptionFormComponent } from './components/doctor/prescription-form/prescription-form.component';
import { PrescriptionListComponent } from './components/doctor/prescription-list/prescription-list.component';
import { LoginComponent } from "./components/login/login.component";
import { MainComponentComponent } from './components/main-component/main-component.component';
import { MyPrescriptionsComponent } from './components/patient/my-prescriptions/my-prescriptions.component';

export const routes: Routes = [
    { path: "", redirectTo: "login", pathMatch: 'full' },
    { path: "login", component: LoginComponent },
    {path: "admin", component: MainComponentComponent, children: [
        { path: "dashboard", component: DashboardComponent },
        { path: "doctor-list", component: DoctorListComponent },
        { path: "patient-list", component: PatientListComponent },
        { path: "medicine-list", component: MedicineListComponent },
        { path: "user-form", component: UserFormComponent },
        { path: "medicine-form", component: MedicineFormComponent },
        

    ]},
    {path:"doctor",component: MainComponentComponent, children:[
        { path: "home", component: HomeComponent },
        { path: "prescription-form", component: PrescriptionFormComponent },
        { path: "prescription-list", component: PrescriptionListComponent },
    ]},
    {path:"patient",component: MainComponentComponent,children:[
        { path: "home", component: HomeComponent },
        { path: "my-prescription", component: MyPrescriptionsComponent },
    ]},
   
    
  


];
