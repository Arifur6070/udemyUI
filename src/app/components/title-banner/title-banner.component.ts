import { Component, OnInit } from '@angular/core';
import { Course } from 'src/app/models/course.model';
import { CourseService } from 'src/app/services/course.service';


@Component({
  selector: 'app-title-banner',
  templateUrl: './title-banner.component.html',
  styleUrls: ['./title-banner.component.scss']
})
export class TitleBannerComponent implements OnInit {

  value=4.5;
  laguageClicked=false;
  courseSubject:Course;
  constructor(
    private courseService:CourseService
  ) { }

  ngOnInit(): void {
    this.courseSubject=this.courseService.getCourse();
    console.log(this.courseSubject.courseTitle);
  }

  anchorClicked(){
    this.laguageClicked=true;
  }

}
