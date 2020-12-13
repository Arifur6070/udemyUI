import { Content } from '@angular/compiler/src/render3/r3_ast';

export class CourseContent{
  title:string;
  contents:Content[];

  constructor(
    title:string,
    contents:Content[]
  ){
     this.title=title;
     this.contents=contents;
  }
}
