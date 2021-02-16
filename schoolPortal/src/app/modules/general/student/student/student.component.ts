import { Component, OnInit, ViewChild } from '@angular/core';
// import  studentsData from  './students.json';
import  *  as  studentsData  from  './students.json';
import { NgForm } from '@angular/forms'; 
import { Student } from './student.modal';

interface Students {
  id: Number;
  name: String;
  email: String;
  gender: String;
}


@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})


export class StudentComponent implements OnInit {

  // @ViewChild("form")
  form: NgForm | undefined;
  
  students: Students[] = studentsData;

 
  studentsData : any = [{}];
 
  stud: Student = new Student();

  constructor() { }

  ngOnInit(): void {

  }


  save(){

    console.log('name', this.stud.name);

    // this.studentsData.push(this.stud);
  }


}
