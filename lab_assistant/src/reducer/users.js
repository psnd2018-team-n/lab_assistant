import * as Action from '../actions/users';

import * as API from '../api_mock/api';

/**
 * ステータスの初期値を返します
 * @return {Object}     初期値
 */
const initialState = () => {
  const allUsers = API.getAllUsers();
  return {
    allUsers,
    displayUsers: allUsers,
  };
};

/**
 * 画面のリデューサ
 * @param  {Object} [state=initialState] 画面の状態
 * @param  {Object} action               アクション
 * @return {Object}                      画面の状態
 */
export default function reducer(state = initialState(), action) {
  const { type } = action;
  switch (type) {
    case Action.GET_USERS:
      return {
        ...state,
      };
    default:
      return state;
  }
}
