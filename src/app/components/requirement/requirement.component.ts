import { Component, OnInit } from '@angular/core';
import { Course } from 'src/app/models/course.model';
import { CourseService } from 'src/app/services/course.service';

@Component({
  selector: 'app-requirement',
  templateUrl: './requirement.component.html',
  styleUrls: ['./requirement.component.scss']
})
export class RequirementComponent implements OnInit {

  course:Course;
  constructor(
    private courseService:CourseService
  ) { }

  ngOnInit(): void {
    this.course=this.courseService.getCourse();
  }



}
