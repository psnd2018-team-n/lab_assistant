import { actionCreatorFactory, Action } from 'typescript-fsa';

const actionCreator = actionCreatorFactory();

 /** 時間の同期 */
const syncDate = actionCreator('SYNC_DATE');

export interface TopAction {
  syncDate: () => Action<void>;
}

export const actions = {
  syncDate,
};
