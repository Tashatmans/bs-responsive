import { Component } from '@angular/core';
import { User } from '../shared/user';
import { Router } from '@angular/router';
import { UserRepository } from '../shared/user-repository';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
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
