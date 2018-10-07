import { reducerWithInitialState } from 'typescript-fsa-reducers';
import * as moji from 'moji';

import { User } from '../entity';
import * as API from '../api_mock/api';
import { actions } from '../action/users';

export interface UsersState {
  allUsers: User[];
  displayUsers: User[];
  name: string;
  userTypes: object; // TODO
  page: number;
  rowsPerPage: number;
}

/**
 * ステータスの初期値を返します
 * @return {UsersState} 初期値
 */
const initialState = (): UsersState => {
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
 * @param {UsersState} state State
 * @return {User[]} ユーザ一覧
 */
function searchUsers(state: UsersState): User[] {
  let displayUsers = [...state.allUsers].filter(u => !u.deleteFlg);
  const { name, userTypes } = state;
  const filters = [];
  // 名前
  if (name) {
    filters.push((u) => {
      const convertedName = moji(name).convert('HG', 'KK').toString().replace(' ', '');
      const ptn = new RegExp(`${convertedName}`);
      return u.fullName.replace(' ', '').match(ptn)
          || u.fullNameKana.replace(' ', '').match(ptn);
    });
  }
  // ユーザ種別
  if (Object.values(userTypes).some(checked => !!checked)) {
    filters.push(u => u.userTypes.some(ut => userTypes[ut.id]));
  }
  // フィルタを適用する
  filters.forEach((f) => {
    displayUsers = displayUsers.filter(f);
  });
  return displayUsers;
}

/** 画面のリデューサ */
export const usersReducer = reducerWithInitialState(initialState())
    // Stateのセット
    .case(actions.setState, (state, payload) => {
      const { value, name, key } = payload;
      const newState = { ...state };
      if (key) {
        newState[name][key] = value;
      } else {
        newState[name] = value;
      }
      return newState;
    })
    .case(actions.searchUsers, (state) => {
      return {
        ...state,
        displayUsers: searchUsers(state),
      };
    })
    .case(actions.changePage, (state, payload) => {
      return {
        ...state,
        page: payload.page,
      };
    })
    .case(actions.changeRowsPerPage, (state, payload) => {
      return {
        ...state,
        rowsPerPage: payload.rowsPerPage,
      };
    });
