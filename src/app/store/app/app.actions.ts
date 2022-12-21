import { createAction, props } from '@ngrx/store';
import { AppTheme } from './app.model';

export const toggleTheme = createAction(
  '[App] Switch Between Themes',
);

export const setTheme = createAction(
  '[App] Set Provided Theme in Store',
  props<{ theme: AppTheme }>()
);

export const initTheme = createAction(
  '[App] Get Saved Theme on Launch'
);

export const loadAppsFailure = createAction(
  '[App] Load Apps Failure',
  props<{ error: any }>()
);
