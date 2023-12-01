import { Injectable } from "@angular/core";
import { User } from "./user";

@Injectable({
    providedIn: 'root'
  })

export class UserRepository {

    users: User[]

    constructor(){
        this.users = [{uid:0, email:'testuser@mail.com',password:'pw1234'}]
    }

    getUsers():User[]{
        return this.users
    }

    getUserByEmail(email:string):User{
        return this.users.find(u=> u.email==email)!
    }

    addUser(mail:string,pass:string){
        this.users.push({uid:this.users.length,email:mail,password:pass})
    }

}
