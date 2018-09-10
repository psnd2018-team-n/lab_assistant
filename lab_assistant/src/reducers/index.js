import { combineReducers } from 'redux';

import Top from './top';

/**
 * 全てのリデューサを集約したリデューサ
 * @type {Object}
 */
const reducer = combineReducers({
  Top,
});

export default reducer;
