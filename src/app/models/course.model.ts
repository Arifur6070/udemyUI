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
   learningGoals:string[];

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
    learningGoals:string[]
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
  }

}
