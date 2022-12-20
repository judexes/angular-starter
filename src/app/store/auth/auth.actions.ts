import { UserModel } from '../users';
import { createAction, props } from '@ngrx/store';
import { AuthRegistrationData } from './auth.model';

export const login = createAction(
  '[Auth/API] Init Login',
  props<{ payload: Partial<UserModel> }>()
);

export const loginSuccess = createAction(
  '[Auth/API] Login Success'
);

export const loginFailure = createAction(
  '[Auth/API] Login Failure',
  props<{ payload: {error: string} }>()
);

export const setAuthUser = createAction(
  '[Auth] Set Logged in User',
  props<{ user: UserModel}>()
);

export const updateAuthUser = createAction(
  '[Auth] Update Logged in User',
  props<{ user: UserModel}>()
);

export const register = createAction(
  '[Auth/API] Register',
  props<{ user: AuthRegistrationData}>()
);

export const registerSuccess = createAction(
  '[Auth/API] Account Registration Success'
);

export const registerFailure = createAction(
  '[Auth/API] Registration Failure',
  props<{ payload: {error: string} }>()
);
export const logout = createAction(
  '[Auth/API] Register'
);

export const logoutSuccess = createAction(
  '[Auth/API] Account Registration Success'
);

export const logoutFailure = createAction(
  '[Auth/API] Registration Failure',
  props<{ payload: {error: string} }>()
);

