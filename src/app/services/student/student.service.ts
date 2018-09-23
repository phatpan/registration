import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Student } from 'src/app/models/student';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private httpClient: HttpClient) { }

  save(data: Student) {
    return this.httpClient.post('http://139.5.147.31:8888/api/student', data);
  }

  getStudentList(): Observable<Student[]> {
    return this.httpClient.get<Student[]>('http://139.5.147.31:8888/api/student');
  }

  getStudentByID(id: number) {
    return this.httpClient.get<Student>(`http://139.5.147.31:8888/api/student/${id}`);
  }

  updateStudentByID(student: Student, id: number) {
    return this.httpClient.put(`http://139.5.147.31:8888/api/student/${id}`, student);
  }

  deleteStudentByID(id: number) {
    return this.httpClient.delete(`http://139.5.147.31:8888/api/student/${id}`);
  }
}
