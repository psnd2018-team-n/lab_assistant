export const SET_STATE = 'SET_STATE';
export const SEARCH_USERS = 'SEARCH_USERS';
export const CHANGE_PAGE = 'CHANGE_PAGE';
export const CHANGE_ROWS_PER_PAGE = 'CHANGE_ROWS_PER_PAGE';

/**
 * ユーザの取得
 * @return {Object} アクション
 */
export function setState(value, name, key) {
  return {
    type: SET_STATE,
    payload: { value, name, key },
    meta: {},
  };
}

/**
 * ユーザの取得
 * @return {Object} アクション
 */
export function searchUsers() {
  return {
    type: SEARCH_USERS,
    payload: {},
    meta: {},
  };
}

/**
 * ページ変更
 * @param {Number} page 変更後ページ番号
 * @return {Object} アクション
 */
export function changePage(page) {
  return {
    type: CHANGE_PAGE,
    payload: { page },
    meta: {},
  };
}

/**
 * １ページあたりの行数の変更
 * @param {Number} rowsPerPage 変更後の１ページあたりの行数
 * @return {Object} アクション
 */
export function changeRowsPerPage(rowsPerPage) {
  return {
    type: CHANGE_ROWS_PER_PAGE,
    payload: { rowsPerPage },
    meta: {},
  };
}
