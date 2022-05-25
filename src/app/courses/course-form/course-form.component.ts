import { CoursesService } from './../services/courses.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.scss']
})
export class CourseFormComponent implements OnInit {

  form: FormGroup;
  constructor(private formBuilder: FormBuilder,
   private servive:CoursesService, private snackBar: MatSnackBar
    ) {
      this.form = this.formBuilder.group({
        name: [null],
        category: [null]
      });
   }

  ngOnInit(): void {}

  onSubmit(){
     this.servive.save(this.form.value)
     .subscribe(result => console.log(result), error => {
       this.snackBar.open('Erro ao salvar Curso', '', {duration: 5000});
      })
  }

  onCancel(){}

}
