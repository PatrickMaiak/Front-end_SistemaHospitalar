import { Role } from "../role/role";

export class User {
    id!: number;
    name!: string;
    email!:string;
    role!:Role;
    password!:string;

    constructor(id: number, name:string, email:string, role:Role, password:string){
        this.id = id;
        this.name = name;
        this.email = email;
        this.role = role;
        this.password = password;

    }
}
