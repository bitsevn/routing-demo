import { Component, OnChanges, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent implements OnInit, OnChanges {
  courseId: number;

  constructor(private route: ActivatedRoute) {
    console.log('%cCourseComponent created', 'font-size: 16px');
  }

  ngOnInit() {
    console.log('Inside CourseComponent.ngOnInit()');

    this.route.params.subscribe(params => {
      this.courseId = params['id'];
      console.log('route params: ', params);
    });
  }

  ngOnChanges() {
    console.log('Inside CourseComponent.ngOnChanges()');
  }
}
