import { Description } from './description/description.model';

export class Course {

   courseTitle: string;
   courseTagline: string;
   bestSeller: boolean;
   creator:string;
   rating : number;
   lastUpdated: Date;
   languages: string[];
   category: string;
   subCategory:string;
   topic:string;
   requirements:string[];
   learningGoals:string[];
   description:Description;

  constructor(
    courseTitle: string,
    courseTagline: string,
    bestSeller: boolean,
    creator:string,
    rating : number,
    lastUpdated: Date,
    languages: string[],
    category: string,
    subCategory:string,
    topic:string,
    learningGoals:string[],
    requirements:string[],
    description:Description
  ){
    this.courseTitle=courseTitle;
    this.courseTagline=courseTagline;
    this.bestSeller=bestSeller;
    this.creator=creator;
    this.rating=rating;
    this.lastUpdated=lastUpdated;
    this.languages=languages;
    this.category=category;
    this.subCategory=subCategory;
    this.topic=topic;
    this.learningGoals=learningGoals;
    this.requirements=requirements;
    this.description=description;
}

}
