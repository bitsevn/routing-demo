import { Injectable } from '@angular/core';
import { ActivatedRoute, Resolve } from '@angular/router';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable()
export class CourseResolver implements Resolve<any> {
  constructor(private route: ActivatedRoute) {}

  resolve(): Observable<any> {
    console.log('route is being resolved');
    // console.log('resolver route params', this.route.params);

    // console.log('resolver route parent snapshot params', this.route.parent.snapshot.params);
    console.log('resolver route snapshot params', this.route.snapshot.params);
    this.route.params.subscribe(params => console.log('resolver route params', params));
    return of({ courseId: 'Sample course' }).pipe(delay(1000));
  }
}
