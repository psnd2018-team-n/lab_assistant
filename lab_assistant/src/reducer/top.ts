import { reducerWithInitialState } from 'typescript-fsa-reducers';

import { actions } from '../action/top';

export interface TopState {
  time: Date;
}

/**
 * ステータスの初期値を返します
 * @return {TopState} 初期値
 */
const initialState = (): TopState => ({
  time: new Date(),
});

export const topReducer = reducerWithInitialState(initialState())
    // 時間の同期
    .case(actions.syncDate, (state) => {
      return {
        ...state,
        time: new Date(),
      };
    });
