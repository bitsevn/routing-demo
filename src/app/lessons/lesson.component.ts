import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-lesson',
  templateUrl: './lesson.component.html',
  styleUrls: ['./lesson.component.css']
})
export class LessonComponent implements OnInit {
  params: any;
  url: string;

  constructor(private router: Router, private route: ActivatedRoute) {
    console.log('%cLessonComponent is created!', 'font-size: 18px;');
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.url = this.router.url;
      this.params = params;
      console.log('%cActivated.route.url', 'font-size: 14px;', this.router.url);
      console.log('%cActivated.route.params', 'font-size: 14px;', params);
    });
  }
}
