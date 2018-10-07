import { combineReducers, Reducer } from 'redux';

import { topReducer, TopState } from './top';
import { usersReducer, UsersState } from './users';

export type AppState = {
  top: TopState,
  users: UsersState,
};

/**
 * 全てのリデューサを集約したリデューサ
 * @type {Reducer<AppState>}
 */
const reducer: Reducer<AppState> = combineReducers<AppState>({
  top: topReducer,
  users: usersReducer,
});

export default reducer;
