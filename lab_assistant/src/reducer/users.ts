import { reducerWithInitialState } from 'typescript-fsa-reducers';
import * as moji from 'moji';

import {
  User,
  UserType,
} from '../entity';
import * as API from '../api_mock/api';
import { actions } from '../action/users';

export interface UsersState {
  allUsers: User[];
  displayUsers: User[];
  name: string;
  checkedFlgByUserTypeId: Map<number, boolean>;
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
    displayUsers: allUsers.filter((u: User) => !u.deleteFlg),
    name: '',
    checkedFlgByUserTypeId: new Map<number, boolean>(),
    page: 0,
    rowsPerPage: 10,
  };
};

/**
 * ユーザの検索
 * @param {UsersState} state State
 * @return {User[]} ユーザ一覧
 */
function searchUsers(state: UsersState): User[] {
  let displayUsers = [...state.allUsers].filter(u => !u.deleteFlg);
  const { name, checkedFlgByUserTypeId } = state;
  // フィルタリング関数
  type filterFunc = (u: User) => boolean;
  const filters: filterFunc[] = [];

  // 名前
  if (name) {
    filters.push((u: User): boolean => {
      const convertedName = moji(name).convert('HG', 'KK').toString().replace(' ', '');
      const ptn = new RegExp(`${convertedName}`);
      return Boolean(moji(u.fullName).convert('HG', 'KK').toString().replace(' ', '').match(ptn)
          || u.fullNameKana.replace(' ', '').match(ptn));
    });
  }
  // ユーザ種別
  if (Array.from(checkedFlgByUserTypeId.values()).some((checked): boolean => Boolean(checked))) {
    filters.push((u: User): boolean =>
      u.userTypes.some((ut: UserType) => Boolean(checkedFlgByUserTypeId.get(ut.id))));
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
      const newState: any = { ...state };
      if (key) {
        if (newState[name] instanceof Map) {
          newState[name].set(key, value);
        } else {
          newState[name][key] = value;
        }
      } else {
        newState[name] = value;
      }
      return newState;
    })
    // ユーザの検索
    .case(actions.searchUsers, (state) => {
      return {
        ...state,
        displayUsers: searchUsers(state),
      };
    })
    // ページ変更
    .case(actions.changePage, (state, payload) => {
      return {
        ...state,
        page: payload.page,
      };
    })
    // １ページあたりの行数の変更
    .case(actions.changeRowsPerPage, (state, payload) => {
      return {
        ...state,
        rowsPerPage: payload.rowsPerPage,
      };
    });
