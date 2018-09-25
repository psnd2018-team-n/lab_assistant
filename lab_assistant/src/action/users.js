export const SEARCH_USERS = 'SEARCH_USERS';
export const CHANGE_USER_TYPE = 'CHANGE_USER_TYPE';
export const CHANGE_PAGE = 'CHANGE_PAGE';
export const CHANGE_ROWS_PER_PAGE = 'CHANGE_ROWS_PER_PAGE';

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
 * 取得対象ユーザ種別の変更
 * @param {Number} id ユーザ種別ID
 * @param {Boolean} checked チェック済か
 * @return {Object} アクション
 */
export function changeUserType(id, checked) {
  return {
    type: CHANGE_USER_TYPE,
    payload: { id, checked },
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
