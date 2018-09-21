import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Student } from 'src/app/models/student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private httpClient: HttpClient) { }

  save(data: Student) {
    return this.httpClient.post('http://139.5.147.31:8888/api/student', data);
  }
}
