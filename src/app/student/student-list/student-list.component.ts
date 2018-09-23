import { Component, OnInit } from '@angular/core';
import { Student } from '../../models/student';
import { StudentService } from 'src/app/services/student/student.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {
  students: Student[];

  constructor(
    private studentService: StudentService) { }
  ngOnInit() {
    this.getStudentList();
  }

  getStudentList() {
    this.studentService.getStudentList().subscribe((response: Student[]) => {
      this.students = response;
    });
  }

  delete(id: number) {
    this.studentService.deleteStudentByID(id).subscribe(() => {
      this.getStudentList();
    });
  }

}
