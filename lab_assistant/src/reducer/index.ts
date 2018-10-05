import { combineReducers, Reducer } from 'redux';

import { topReducer, TopState } from './top';
// import { userReducer, UserState } from './users';

export type AppState = {
  top: TopState,
  // user: UserState,
};

/**
 * 全てのリデューサを集約したリデューサ
 * @type {Reducer<AppState>}
 */
const reducer: Reducer<AppState> = combineReducers<AppState>({
  top: topReducer,
  // user: userReducer,
});

export default reducer;
