export class Description{

  descriptionText:string;
  start:number;
  end:number;
  defaultNumber:number;

  constructor(
    descriptionText:string,
    start:number,
    end:number,
    defaultNumber:number
  ){
    this.descriptionText=descriptionText;
    this.start=start;
    this.end=end;
    this.defaultNumber=defaultNumber;
  }

}
