import { Component, OnInit } from '@angular/core';
import  teachersData from  './teachers.json';

interface Teacher{
  id:number;
  name: String;
  email: String;
  gender: String;
}

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.css']
})
export class TeacherComponent implements OnInit {

  teachers: Teacher[] = teachersData;

  constructor() { }

  ngOnInit(): void {
    
  }

}
