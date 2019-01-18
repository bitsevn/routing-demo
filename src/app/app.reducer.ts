import { Injectable } from '@angular/core';
import { RouterStateSnapshot } from '@angular/router';
import { routerReducer, RouterReducerState, RouterStateSerializer } from '@ngrx/router-store';
import {
  Action,
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector
} from '@ngrx/store';
import { storeLogger } from 'ngrx-store-logger';
import { environment } from 'src/environments/environment';
import { IAppStoreState, IRouterStateUrl } from './app.interface';

export function logger(reducer: ActionReducer<IAppStoreState>): any {
  // default, no options
  return storeLogger()(reducer);
}

export const metaReducers = !environment.production ? [logger] : [];

@Injectable()
export class CustomRouterStateSerializer extends RouterStateSerializer<IRouterStateUrl> {
  serialize(state: RouterStateSnapshot): IRouterStateUrl {
    let route = state.root;

    while (route.firstChild) {
      route = route.firstChild;
    }

    const {
      url,
      root: { queryParams }
    } = state;
    const { params } = route;

    // Only return an object including the URL, params and query params
    // instead of the entire snapshot
    return { url, params, queryParams };
  }
}

// fetches you the router state object
export const routerState = createFeatureSelector<RouterReducerState<IRouterStateUrl>>('router');

// gets you info about current route
export const getRouterInfo = createSelector(
  routerState,
  state => state.state
);

export enum EditorActionTypes {
  DIRTY_FORM = '[Editor] Dirty form',
  CLEAN_FORM = '[Editor] Clean form'
}

export class DirtyFormAction implements Action {
  readonly type = EditorActionTypes.DIRTY_FORM;
}

export class CleanFormAction implements Action {
  readonly type = EditorActionTypes.CLEAN_FORM;
}

export type EditorActions = DirtyFormAction | CleanFormAction;

export const editorReducer = (state: boolean, action: EditorActions): boolean => {
  switch (action.type) {
    case EditorActionTypes.DIRTY_FORM: {
      return true;
    }

    case EditorActionTypes.CLEAN_FORM: {
      return false;
    }
  }
  return state;
};

export const reducers: ActionReducerMap<IAppStoreState> = {
  router: routerReducer,
  editing: editorReducer
};

export const isEditing = createFeatureSelector<boolean>('editing');
