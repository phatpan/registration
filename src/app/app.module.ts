import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FormControlComponent } from './form-control/form-control.component';
import { FormGroupComponent } from './form-group/form-group.component';
import { AddStudentComponent } from './student/add-student/add-student.component';
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './student/dashboard/dashboard.component'

@NgModule({
  declarations: [
    AppComponent,
    FormControlComponent,
    FormGroupComponent,
    AddStudentComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
