import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-course-overview',
  templateUrl: './course-overview.component.html',
  styleUrls: ['./course-overview.component.scss']
})
export class CourseOverviewComponent implements OnInit {
  courseId: number;
  course: any;
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.parent.params.subscribe(params => console.log('overview route params', params));
    this.course = this.route.snapshot.data['course'];
    console.log('course', this.course);
  }
}
