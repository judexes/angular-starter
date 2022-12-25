import { UserModel } from './users.model';
import { createAction, props } from '@ngrx/store';
import { Update } from '@ngrx/entity';

import { Users } from './users.model';

export const loadUsers = createAction('[Users/API] Load Users');

export const loadUsersFailure = createAction(
  '[Users/API] Load Users',
  props<{ error: string }>()
);
export const loadUsersSuccess = createAction('[Users/API] Load Users');

export const addUser = createAction(
  '[Users/API] Add Users',
  props<{ user: UserModel }>()
);

export const updateUser = createAction(
  '[Users/API] Update Users',
  props<{ users: UserModel }>()
);

export const addUsers = createAction(
  '[Users/API] Add Userss',
  props<{ users: UserModel[] }>()
);

export const updateUsers = createAction(
  '[Users/API] Update Users',
  props<{ users: UserModel[] }>()
);

export const deleteUser = createAction(
  '[Users/API] Delete One User',
  props<{ id: string }>()
);

export const deleteUsers = createAction(
  '[Users/API] Delete Users',
  props<{ ids: string[] }>()
);
export const setCurrentUser = createAction(
  '[Users/API] Delete Users',
  props<{ id: string }>()
);

export const clearUsers = createAction('[Users/API] Clear Users');
