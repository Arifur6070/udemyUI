import { Content } from '../../models/course-content/content.model';
import { Injectable } from '@angular/core';
import { CourseContent } from 'src/app/models/course-content/coure-content.model';

@Injectable({
  providedIn: 'root'
})
export class CourseContentService {


  contents: Content[] = [
    new Content(
    'What is Angular',
    {
      hours:0,
      minutes:22

    }
  ),
  new Content(
    'What is Angular2',
    {
      hours:0,
      minutes:22

    }
  ),
  new Content(
    'What is Angular3',
    {
      hours:0,
      minutes:22

    }
  ),new Content(
    'What is Angular4',
    {
      hours:0,
      minutes:22

    }
  ),
  new Content(
    'What is Angular5',
    {
      hours:0,
      minutes:22

    },
  ),

]
courseContents= [
  new CourseContent(
    'Getting Started',
    this.contents
  ),
  new CourseContent(
    'Getting Started2',
    this.contents
  ),
  new CourseContent(
    'Getting Started3',
    this.contents
  ),
  new CourseContent(
    'Getting Started4',
    this.contents
  ),
  new CourseContent(
    'Getting Started5',
    this.contents
  ),
  new CourseContent(
    'Getting Started6',
    this.contents
  ),
  new CourseContent(
    'Getting Started7',
    this.contents
  ),
  new CourseContent(
    'Getting Started8',
    this.contents
  ),
  new CourseContent(
    'Getting Started9',
    this.contents
  ),
  new CourseContent(
    'Getting Started10',
    this.contents
  ),
  new CourseContent(
    'Getting Started11',
    this.contents
  ),
  new CourseContent(
    'Getting Started12',
    this.contents
  ),
  new CourseContent(
    'Getting Started13',
    this.contents
  )
];

 getCourseContents(){
    return this.courseContents;
 }

  constructor() { }
}
