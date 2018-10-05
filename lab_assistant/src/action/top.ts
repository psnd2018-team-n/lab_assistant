import actionCreatorFactory from 'typescript-fsa';

const actionCreator = actionCreatorFactory();

export const actions = {
  /** 時間の同期 */
  syncDate: actionCreator<string>('SYNC_DATE'),
};
