import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { filter, map, take } from 'rxjs/operators';
import { IAppStoreState } from '../app.interface';
import * as fromEditor from '../app.reducer';
import { CourseComponent } from './course.component';

@Injectable()
export class CourseGuard implements CanDeactivate<CourseComponent> {
  constructor(private store: Store<IAppStoreState>) {}

  canDeactivate(
    component: CourseComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot
  ): Observable<boolean> | boolean {
    console.log('running the guard');

    return this.store.select(fromEditor.isEditing).pipe(
      map(editing => {
        console.log('is editing', editing);
        return !editing;
      }),
      filter(editing => editing),
      take(1)
    );
  }
}
