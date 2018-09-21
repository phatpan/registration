import { Component, OnInit } from '@angular/core';
import { Student } from '../../models/student';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {
  students: Student[];

  constructor() { }
  ngOnInit() {
    this.students = [{
      id: 12,
      name: 'kae',
      lastName: 'kae',
      age: 25,
      gender: 'kae',
      birthday: 'kae',
    }];
  }

}
