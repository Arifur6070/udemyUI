import { Content } from './content.model';

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
