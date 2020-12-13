import { Injectable } from '@angular/core';
import { Course } from '../models/course.model';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  courseSubject= new Course(
    'Angular - The Complete Guide (2020 Edition)',
    'Master Angular 10 (formerly "Angular 2") and build awesome, reactive web apps with the successor of Angular.js',
    true,
    'Tony Kroos',
    4.5,
    new Date("2020-02-11"),
    ['English','French','Spanish','Portoguneese'],
    'Development',
    'Web Development',
    'Angular',
    [
      'Create any website layout you can imagine',
      'Support any device size with Responsive (mobile-friendly) Design',
      'Add tasteful animations and effects with CSS3',
      'Use common vocabulary from the design industry'
    ]
  );

  getCourse(){
    return this.courseSubject;
  }

  constructor() { }
}
