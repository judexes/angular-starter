import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppTheme } from './app.model';
import * as fromApp from './app.reducer';

export const selectAppState = createFeatureSelector<fromApp.State>(
  fromApp.appFeatureKey
);

export const selectAppTheme = createSelector(
  selectAppState,
  (state: fromApp.State) => state.theme
);

export const selectIsDarkTheme = createSelector(
  selectAppTheme,
  (theme: AppTheme) => theme === 'dark'
);

export const selectIsLightTheme = createSelector(
  selectAppTheme,
  (theme: AppTheme) => theme === 'light'
);
