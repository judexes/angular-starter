import { environment } from '@/environments/environment';
import { Action, createReducer, MetaReducer, on } from '@ngrx/store';
import { Auth } from './auth.model';
import * as AuthActions from './auth.actions';

export const authFeatureKey = 'auth';

export interface State extends Auth {}

export const initialState: State = {
  user: null,
  loading: false,
  error: null
};

export const reducer = createReducer<State, Action>(
  initialState,
  on(AuthActions.login,
    AuthActions.logout,
    AuthActions.register,
    (state): State => ({...state, loading: true, error: null})
  ),
  on(AuthActions.loginFailure,
    AuthActions.registerFailure,
    AuthActions.logoutFailure,
    (state, action): State => ({...state, loading: false, error: action.payload.error})
  ),
  on(AuthActions.setAuthUser,
     AuthActions.updateAuthUser,
    (state, action): State => ({...state, user: state.user? {...state.user, ...action.user} : action.user})
  ),
  on(AuthActions.loginSuccess,
    AuthActions.registerSuccess,
    (state, action): State => ({...state, loading: false, error: null})
  ),
  on(AuthActions.logoutSuccess,
    (state, action): State => ({...state, loading: false, user: null})
  )
);

export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];