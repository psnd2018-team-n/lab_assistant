import { combineReducers } from 'redux';

import Top from './top';
import Users from './users';

/**
 * 全てのリデューサを集約したリデューサ
 * @type {Object}
 */
const reducer = combineReducers({
  Top,
  Users,
});

export default reducer;
