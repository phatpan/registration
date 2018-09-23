import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { StudentService } from 'src/app/services/student/student.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Student } from '../../models/student';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {
  addForm: FormGroup;
  messageError: string;
  constructor(
    private studentService: StudentService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private fb: FormBuilder) {
    this.createForm();
  }

  ngOnInit() {
    if (this.activatedRoute.snapshot.params.id) {
      this.studentService.getStudentByID(this.activatedRoute.snapshot.params.id).subscribe((student: Student) => {
        this.setValueStudent(student);
      });
    }
  }

  onSubmit() {
    this.reset();
    if (this.activatedRoute.snapshot.params.id) {
      this.update();
    } else {
      this.save();
    }
  }

  update() {
    this.studentService.updateStudentByID(this.addForm.value, this.activatedRoute.snapshot.params.id).subscribe(() => {
      this.router.navigate(["/dashboard"]);
    }, (err: Error) => {
      this.messageError = err.message;
    });
  }

  save() {
    this.studentService.save(this.addForm.value).subscribe(() => {
      this.router.navigate(["/dashboard"]);
    }, (err: Error) => {
      this.messageError = err.message;
    });
  }

  reset() {
    this.messageError = '';
  }

  createForm() {
    this.addForm = this.fb.group({
      name: '',
      lastName: '',
      age: '',
      gender: '',
      birthday: ''
    });
  }

  setValueStudent(student: Student) {
    this.addForm.setValue({
      name: student.name,
      lastName: student.lastName,
      age: student.age,
      gender: student.gender,
      birthday: student.birthday
    });
  }
}
