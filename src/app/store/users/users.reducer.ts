import { UserModel } from './users.model';
import { environment } from '@/environments/environment';
import { Action, createReducer, MetaReducer, on } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { Users } from './users.model';
import * as UsersActions from './users.actions';

export const usersFeatureKey = 'users';

export interface State extends EntityState<UserModel> {
  currentUserId: string | null;
  loading: boolean;
  error: string | null
  
}

export const adapter: EntityAdapter<UserModel> = createEntityAdapter<UserModel>();

export const initialState: State = adapter.getInitialState({
  currentUserId: null,
  loading: false,
  error: null
});

export const reducer = createReducer<State, Action>(
  initialState,
  on(UsersActions.addUser,
    (state, action) => adapter.addOne(action.user, state)
  ),
  on(UsersActions.updateUser,
    (state, action) => adapter.upsertOne(action.users, state)
  ),
  on(UsersActions.addUsers,
    (state, action) => adapter.addMany(action.users, state)
  ),
  on(UsersActions.updateUsers,
    (state, action) => adapter.upsertMany(action.users, state)
  ),
  on(UsersActions.deleteUser,
    (state, action) => adapter.removeOne(action.id, state)
  ),
  on(UsersActions.deleteUsers,
    (state, action) => adapter.removeMany(action.ids, state)
  ),
  on(UsersActions.clearUsers,
    state => adapter.removeAll(state)
  ),
  on(UsersActions.setCurrentUser,
    (state, action): State => ({
      ...state,
      currentUserId: action.id
      })
  ),
  on(
    UsersActions.loadUsers,
    (state): State => ({
      ...state,
      loading: true,
      error: null
    })
  ),
  on(
    UsersActions.loadUsersFailure,
    (state, action): State => ({
      ...state,
      loading: false,
      error: action.error
    })
  ),

);

export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];

export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = adapter.getSelectors();
