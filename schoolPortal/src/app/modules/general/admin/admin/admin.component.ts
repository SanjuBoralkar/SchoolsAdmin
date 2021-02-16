import { Component, OnInit } from '@angular/core';
import  adminsData from  './admins.json';

interface  Admin

{
  id: Number;
  name: String;
  email: String;
  gender: String;
}

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  admins: Admin[] = adminsData;

  constructor() { }

  ngOnInit(): void {
  }

}
