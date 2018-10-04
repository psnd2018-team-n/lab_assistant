import moji from 'moji';

import * as Action from '../action/users';
import * as API from '../api_mock/api';

/**
 * ステータスの初期値を返します
 * @return {Object} 初期値
 */
const initialState = () => {
  const allUsers = API.getAllUsers();
  return {
    allUsers,
    displayUsers: allUsers.filter(u => !u.deleteFlg),
    name: '',
    userTypes: {},
    page: 0,
    rowsPerPage: 10,
  };
};

/**
 * ユーザの検索を行います
 * @param {Object} state State
 * @return {User[]} ユーザ一覧
 */
function searchUsers(state) {
  let displayUsers = [...state.allUsers].filter(u => !u.deleteFlg);
  const { name, userTypes } = state;
  const filters = [];
  // 名前
  if (name) {
    filters.push((u) => {
      const convertedName = moji(name).convert('HG', 'KK').toString().replace(' ', '');
      const ptn = new RegExp(`${convertedName}`);
      return u.fullName.replace(' ', '').match(ptn) || u.fullNameKana.replace(' ', '').match(ptn);
    });
  }
  // ユーザ種別
  if (Object.values(userTypes).some(checked => checked)) {
    filters.push(u => u.userTypes.some(ut => userTypes[ut.id]));
  }
  // フィルタを適用する
  filters.forEach((f) => {
    displayUsers = displayUsers.filter(f);
  });
  return displayUsers;
}

/**
 * 画面のリデューサ
 * @param  {Object} [state=initialState] 画面の状態
 * @param  {Object} action               アクション
 * @return {Object}                      画面の状態
 */
export default function reducer(state = initialState(), action) {
  const { type, payload } = action;
  switch (type) {
    case Action.SET_STATE:
      const { value, name, key } = payload;
      const newState = { ...state };
      if (key) {
        newState[name][key] = value;
      } else {
        newState[name] = value;
      }
      return newState;

    case Action.SEARCH_USERS:
      return {
        ...state,
        displayUsers: searchUsers(state),
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
