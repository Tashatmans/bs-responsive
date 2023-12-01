import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserRepository } from '../shared/user-repository';
import { Router } from '@angular/router';
import { User } from '../shared/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  users!:User[]
  message!:string 

  constructor(private userService:UserRepository,private router:Router){
    this.users=userService.getUsers()
  }

  onSubmit(form:NgForm){
    if (form.invalid) {
      this.message="password or mail wrong!!"
      return
    }

    const email = form.value.email
    const password = form.value.password

    const loginUser = this.userService.getUserByEmail(email)

    if(loginUser && loginUser.password == password){
      this.router.navigateByUrl("/account")
    }
    this.message="password or mail wrong!!"
    return

    // this.userService.addUser(email,password)
  }

}
