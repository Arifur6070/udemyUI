import { Component, OnInit } from '@angular/core';
import { CourseContent } from 'src/app/models/course-content/coure-content.model';
import { CourseContentService } from 'src/app/services/course-content/course-content.service';

@Component({
  selector: 'app-course-content',
  templateUrl: './course-content.component.html',
  styleUrls: ['./course-content.component.scss']
})
export class CourseContentComponent implements OnInit {

  sectionClicked=false;
  initialSection=[];
  restSection=[];
  right='right';
  courseContent:CourseContent[]=[];
  constructor(
    private contentService:CourseContentService
  ) { }

  ngOnInit(): void {
    this.formattingCourseContent();
    console.log(this.initialSection[0].title);
    console.log(this.restSection.length);
  }

  formattingCourseContent(){
    this.courseContent=this.contentService.getCourseContents();
    if(this.courseContent.length>10){
      for(let i = 0;i<10;i++){
        this.initialSection.push(
          this.courseContent[i]
        );
      }
      for(let i = 10;i<this.courseContent.length;i++){
        this.restSection.push(
          this.courseContent[i]
        );
      }
    }
  }

  eventClicked(){
    this.sectionClicked=true;
  }

}
