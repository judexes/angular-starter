import { ThemeService } from '@services/app/theme.service';
import { Injectable } from '@angular/core';
import { Actions, concatLatestFrom, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap, exhaustMap } from 'rxjs/operators';
import { of, tap } from 'rxjs';
import * as AppActions from './app.actions';
import { Store } from '@ngrx/store';
import { selectAppTheme } from './app.selectors';
import { AppTheme } from './app.model';

const sanitizeTheme = (theme: string) => {
  const themeStr = theme.toLowerCase().trim();
  if (['light', 'dark'].includes(themeStr)) {
    return <AppTheme>themeStr;
  }
  return 'light';
};
@Injectable()
export class AppEffects {
  initAppTheme$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(AppActions.initTheme),
      concatMap(() =>
        this.themeService.getTheme().pipe(
          map(theme => AppActions.setTheme({ theme: sanitizeTheme(theme) })),
          tap(({ theme }) => this.themeService.setUiTheme(theme)),
          catchError(error => of(AppActions.loadAppsFailure({ error })))
        )
      )
    );
  });

  toggleAppTheme$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(AppActions.toggleTheme),
      concatLatestFrom(() => this.store.select(selectAppTheme)),
      map(([, theme]) =>
        theme === 'dark'
          ? AppActions.setTheme({ theme: 'light' })
          : AppActions.setTheme({ theme: 'dark' })
      ),
      tap(({ theme }) => this.themeService.setUiTheme(theme)),
      catchError(error => of(AppActions.loadAppsFailure({ error })))
    );
  });

  constructor(
    private actions$: Actions,
    private themeService: ThemeService,
    private store: Store
  ) {}
}
