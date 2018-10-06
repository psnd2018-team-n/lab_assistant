import actionCreatorFactory from 'typescript-fsa';
import { Action } from 'typescript-fsa';

const actionCreator = actionCreatorFactory();

export interface TopAction {
  syncDate: () => Action<void>;
}

export const actions = {
  /** 時間の同期 */
  syncDate: actionCreator<string>('SYNC_DATE'),
};
