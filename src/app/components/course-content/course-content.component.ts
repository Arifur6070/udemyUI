import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course-content',
  templateUrl: './course-content.component.html',
  styleUrls: ['./course-content.component.scss']
})
export class CourseContentComponent implements OnInit {

  constructor() { }

  sectionClicked=false;

  panels = [
    {
      active: false,
      name: 'This is panel header 1',
      content:'Content',
      disabled: false
    },
    {
      active: false,
      disabled: false,
      content:'Html Essential',
      name: 'This is panel header 2'
    },
    {
      active: false,
      disabled: false,
      content:'Some',
      name: 'This is panel header 3'
    },
    {
      active: false,
      name: 'This is panel header 4',
      content:'Content',
      disabled: false
    },
    {
      active: false,
      disabled: false,
      content:'Html Essential',
      name: 'This is panel header 5'
    },
    {
      active: false,
      disabled: false,
      content:'Some',
      name: 'This is panel header 6'
    },
    {
      active: false,
      name: 'This is panel header 7',
      content:'Content',
      disabled: false
    },
    {
      active: false,
      disabled: false,
      content:'Html Essential',
      name: 'This is panel header 8'
    },
    {
      active: false,
      disabled: false,
      content:'Some',
      name: 'This is panel header 9'
    },
    {
      active: false,
      name: 'This is panel header 10',
      content:'Content',
      disabled: false
    },
    {
      active: false,
      disabled: false,
      content:'Html Essential',
      name: 'This is panel header 11'
    },
    {
      active: false,
      disabled: false,
      content:'Some',
      name: 'This is panel header 12'
    }
  ];


  ngOnInit(): void {
  }

}
