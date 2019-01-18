import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { IAppStoreState } from '../app.interface';
import * as fromRouter from '../app.reducer';

@Component({
  selector: 'app-course-overview',
  templateUrl: './course-overview.component.html',
  styleUrls: ['./course-overview.component.scss']
})
export class CourseOverviewComponent implements OnInit {
  courseId: number;

  constructor(private store: Store<IAppStoreState>) {}

  ngOnInit() {
    this.store.select(fromRouter.getRouterInfo).subscribe(routerInfo => {
      this.courseId = routerInfo.params['id'];
    });
  }

  onChange(value: string) {
    if (value.length > 2) {
      console.log('value', value);
      this.store.dispatch(new fromRouter.DirtyFormAction());
    }
  }
}
