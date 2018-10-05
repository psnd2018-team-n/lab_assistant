export const SET_STATE = 'SET_STATE';
export const SEARCH_USERS = 'SEARCH_USERS';
export const CHANGE_PAGE = 'CHANGE_PAGE';
export const CHANGE_ROWS_PER_PAGE = 'CHANGE_ROWS_PER_PAGE';

/**
 * Stateのセット
 * @param value セットする値
 * @param {string} name プロパティ名
 * @param {string} [key] キーまたはインデックス
 * @return {object} アクション
 */
export function setState(value, name: string, key: string): object {
  return {
    type: SET_STATE,
    payload: { value, name, key },
    meta: {},
  };
}

/**
 * ユーザの取得
 * @return {object} アクション
 */
export function searchUsers(): object {
  return {
    type: SEARCH_USERS,
    payload: {},
    meta: {},
  };
}

/**
 * ページ変更
 * @param {number} page 変更後ページ番号
 * @return {object} アクション
 */
export function changePage(page: number): object {
  return {
    type: CHANGE_PAGE,
    payload: { page },
    meta: {},
  };
}

/**
 * １ページあたりの行数の変更
 * @param {number} rowsPerPage 変更後の１ページあたりの行数
 * @return {object} アクション
 */
export function changeRowsPerPage(rowsPerPage: number): object {
  return {
    type: CHANGE_ROWS_PER_PAGE,
    payload: { rowsPerPage },
    meta: {},
  };
}
