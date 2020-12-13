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
    ],
    [
      'NO Angular 1 or Angular 2 knowledge is required!',
      'Basic HTML and CSS knowledge helps, but isn\'t a must-have',
      'Prior TypeScript knowledge also helps but isn\'t necessary to benefit from this course',
      'Basic JavaScript knowledge is required'
    ],
     {
       descriptionText:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lorem dui, tempus congue elementum sed, consectetur nec ante. In viverra molestie semper. Nulla id tincidunt sem. Aenean dictum felis et neque mollis vehicula. In fermentum ac sapien ac aliquam. Donec vel congue mi. Morbi et mattis elit, vitae varius purus. Nulla a tincidunt dolor, non consequat magna. Sed nulla enim, scelerisque vel augue eget, tempor luctus felis. Integer elementum lectus ut neque efficitur consequat. Sed id volutpat neque. Nullam ornare nunc libero, non efficitur arcu mattis nec. Fusce tortor enim, posuere ut elit non, maximus finibus justo.Suspendisse sit amet molestie neque. Duis nec tortor libero. Pellentesque eget sem non quam condimentum malesuada. Donec posuere consequat purus quis sodales. Morbi vulputate lorem a lacinia gravida. Quisque sit amet accumsan odio, sit amet consequat urna. Ut luctus elit ac tempor fringilla. Nullam at semper neque. Phasellus malesuada mattis augue, a ultricies leo bibendum vel. Mauris consectetur lobortis dolor efficitur auctor. Proin lobortis fringilla augue facilisis aliquet. Quisque id elit odio. Integer scelerisque sapien est, at laoreet massa volutpat at. Donec cursus rhoncus dignissim. Nunc erat lectus, cursus ac egestas id, vestibulum at magna.Cras a metus ut risus blandit faucibus non ac ex. Cras laoreet vitae massa a sodales. Nunc et scelerisque quam, nec tempus risus. Vestibulum at gravida ipsum, id maximus justo. Donec at tellus eu tellus viverra aliquet. Morbi non mollis ante. Integer ac dui sed eros fermentum posuere. Mauris consequat lectus id elementum tincidunt. Sed purus leo, molestie id elementum nec, venenatis in metus.',
       start:0,
       end:500,
       defaultNumber:500
     }
  );

  getCourse(){
    return this.courseSubject;
  }

  constructor() { }
}
