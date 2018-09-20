export const GET_USERS = 'GET_USERS';

/**
 * 時間の同期
 * @return {Object} アクション
 */
export function getUsers(conditons) {
  return {
    type: GET_USERS,
    payload: { conditons },
    meta: {},
  };
}
