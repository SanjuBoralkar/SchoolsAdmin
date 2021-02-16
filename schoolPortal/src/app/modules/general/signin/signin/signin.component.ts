import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  userForm :FormGroup;
 
  constructor(private route: Router) {
     this.userForm = new FormGroup({
      userName : new FormControl(),
      password : new FormControl()
     })
   }

  ngOnInit(): void {
  }

  Submit(){
    console.log("values ", this.userForm.get("userName").value);
    console.log("values ", this.userForm.get("password").value);
    if( this.userForm.get("userName").value == "admin" &&  this.userForm.get("password").value == "admin" ){
       this.route.navigateByUrl('/admin');
    } else if( this.userForm.get("userName").value == "teacher" &&  this.userForm.get("password").value == "teacher" ){
      this.route.navigateByUrl('/teacher');
    }else if( this.userForm.get("userName").value == "student" &&  this.userForm.get("password").value == "student"){
      this.route.navigateByUrl('/student');
    }
  }

  



}
