import { CoursesService } from './../services/courses.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.scss']
})
export class CourseFormComponent implements OnInit {

  form: FormGroup;
  constructor(private formBuilder: FormBuilder,
   private servive:CoursesService
    ) {
      this.form = this.formBuilder.group({
        name: [null],
        category: [null]
      });
   }

  ngOnInit(): void {}

  onSubmit(){
     this.servive.save(this.form.value).subscribe(result => console.log(result))
  }

  onCancel(){}

}
