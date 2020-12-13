import { Component, OnInit } from '@angular/core';
import { Course } from 'src/app/models/course.model';
import { CourseService } from 'src/app/services/course.service';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.scss']
})
export class DescriptionComponent implements OnInit {

  sliceOptions = {
    start: 0,
    end: 500,
    default: 500
  }
  clicked=false;
  course:Course;
  default:number;
  constructor(
    private courseService:CourseService
  ) { }

  ngOnInit(): void {
    this.formatingOptions();

  }

  formatingOptions(){
    this.course=this.courseService.getCourse();
    this.default=this.course.description.defaultNumber;
  }

  onExpandText(evt:any): void{
    this.course.description.end = this.course.description.end?undefined:this.course.description.defaultNumber;
    this.clicked=true;
    // this.sliceOptions.end = this.sliceOptions.end?undefined:this.sliceOptions.default;
  }

  onShrinkingText(evt:any): void{
    this.course.description.end = this.course.description.end?undefined:this.course.description.defaultNumber;
    this.clicked=false;
    // this.sliceOptions.end = this.sliceOptions.end?undefined:this.sliceOptions.default;
  }

}
