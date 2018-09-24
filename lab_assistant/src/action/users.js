export const SEARCH_USERS = 'SEARCH_USERS';
export const CHANGE_USER_TYPE = 'CHANGE_USER_TYPE';

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

export function changeUserType(id) {
  return {
    type: CHANGE_USER_TYPE,
    payload: { id },
    meta: {},
  };
}
