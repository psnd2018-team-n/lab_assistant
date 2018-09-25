import * as Action from '../action/users';

import * as API from '../api_mock/api';

/**
 * ステータスの初期値を返します
 * @return {Object}     初期値
 */
const initialState = () => {
  const allUsers = API.getAllUsers();
  return {
    allUsers,
    displayUsers: allUsers.filter(u => !u.deleteFlg),
    checkedUserTypes: [],
    page: 0,
    rowsPerPage: 10,
  };
};

/**
 * 画面のリデューサ
 * @param  {Object} [state=initialState] 画面の状態
 * @param  {Object} action               アクション
 * @return {Object}                      画面の状態
 */
export default function reducer(state = initialState(), action) {
  const { type, payload } = action;
  switch (type) {
    case Action.SEARCH_USERS:
      let displayUsers = [...state.allUsers].filter(u => !u.deleteFlg);
      // ユーザ種別でのフィルタ
      if (state.checkedUserTypes.length) {
        const isContain = u => u.userTypes.some(ut => state.checkedUserTypes.contain(ut.id));
        displayUsers = displayUsers.filter(isContain);
      }
      return {
        ...state,
        displayUsers,
      };

    case Action.CHANGE_USER_TYPE:
      const checkedUserTypes = [...state.checkedUserTypes];
      // チェック状態に応じて、IDを追加・除去
      if (payload.checked) {
        checkedUserTypes.splice(checkedUserTypes.indexOf(payload.id), 1);
      } else {
        checkedUserTypes.push(payload.id);
      }
      return {
        ...state,
        checkedUserTypes,
      };

    case Action.CHANGE_PAGE:
      return {
        ...state,
        page: payload.page,
      };

    case Action.CHANGE_ROWS_PER_PAGE:
      return {
        ...state,
        rowsPerPage: payload.rowsPerPage,
      };

    default:
      return state;
  }
}