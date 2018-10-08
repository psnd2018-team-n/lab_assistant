import { actionCreatorFactory, Action } from 'typescript-fsa';

const actionCreator = actionCreatorFactory();

/** Stateのセット */
interface SetStatePayload {
  value: any;
  name: string;
  key?: any;
}
const setState = actionCreator<SetStatePayload>('SET_STATE');

/** ユーザの検索 */
const searchUsers = actionCreator('SEARCH_USERS');

/** ページ変更 */
interface ChangePagePayload {
  page: number;
}
const changePage = actionCreator<ChangePagePayload>('CHANGE_PAGE');

/** １ページあたりの行数の変更 */
interface ChangeRowsPerPagePayload {
  rowsPerPage: number;
}
const changeRowsPerPage = actionCreator<ChangeRowsPerPagePayload>('CHANGE_ROWS_PER_PAGE');

export interface UsersAction {
  setState: (p: SetStatePayload) => Action<SetStatePayload>;
  searchUsers: () => Action<void>;
  changePage: (p: ChangePagePayload) => Action<ChangePagePayload>;
  changeRowsPerPage: (p: ChangeRowsPerPagePayload) => Action<ChangeRowsPerPagePayload>;
}

export const actions = {
  setState,
  searchUsers,
  changePage,
  changeRowsPerPage,
};
