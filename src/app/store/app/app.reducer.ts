import { environment } from '@/environments/environment';
import { createReducer, on, MetaReducer } from '@ngrx/store';
import * as AppActions from './app.actions';
import { AppTheme } from './app.model';


export const appFeatureKey = 'app';

export interface State {
  theme: AppTheme;

}

export const initialState: State = {
  theme: 'light'

};

export const reducer = createReducer(
  initialState,
  on(AppActions.setTheme, (state, { theme }) => ({ ...state, theme }))
);


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];