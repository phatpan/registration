import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { StudentService } from 'src/app/services/student/student.service';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {
  addForm = new FormGroup({
    name: new FormControl(''),
    lastName: new FormControl(''),
    age: new FormControl(''),
    gender: new FormControl(''),
    birthday: new FormControl('')
  });
  constructor(private studentService: StudentService) { }

  ngOnInit() {
  }

  onSubmit() {
    this.studentService.save(this.addForm.value).subscribe((data) => {
      console.log(data);
    }, (err) => {
      console.log(err);
    });
  }

}
