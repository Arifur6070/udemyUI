import { Time } from '@angular/common';

export class Content{
  contentName:string;
  contentTime:Time;

  constructor(contentName:string,contentTime:Time){

    this.contentName=contentName;
    this.contentTime=contentTime;

  }
}
