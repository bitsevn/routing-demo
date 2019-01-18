import { Params } from '@angular/router';
import { RouterReducerState } from '@ngrx/router-store';

export interface IRouterStateUrl {
  url: string;
  params: Params;
  queryParams: Params;
}

export interface IAppStoreState {
  router: RouterReducerState<IRouterStateUrl>;
  editing: boolean;
}
