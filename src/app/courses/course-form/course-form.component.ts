import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormBuilder } from '@angular/forms';
import { CoursesService } from './../services/courses.service';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.scss']
})
export class CourseFormComponent implements OnInit {

  form = this.formBuilder.group({
    name: [''],
    category: [ '']
  });

  constructor(private formBuilder: FormBuilder,
    private servive:CoursesService,
    private snackBar: MatSnackBar,
    private location: Location) {
    // this.form
   }

  ngOnInit(): void {}

  onSubmit(){
     this.servive.save(this.form.value)
     .subscribe(result => this.onSucess(), error => this.onError());
  }

  onCancel(){
    this.location.back();
  }

  onSucess(){
    this.snackBar.open('Curso salvo com sucesso!', '', {duration: 5000});
    this.onCancel();
  }

  onError(){
    this.snackBar.open('Erro ao salvar Curso', '', {duration: 5000});
  }

}
