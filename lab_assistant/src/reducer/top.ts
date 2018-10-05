import * as Action from '../action/top';

/**
 * ステータスの初期値を返します
 * @return {object} 初期値
 */
const initialState = (): object => ({
  time: new Date(),
});

/**
 * 画面のリデューサ
 * @param  {object} [state=initialState] 画面の状態
 * @param  {object} action アクション
 * @return {object} 画面の状態
 */
export default function reducer(state: object = initialState(), action: object): object {
  const { type } = action;
  switch (type) {
    case Action.SYNC_DATE:
      return {
        ...state,
        time: new Date(),
      };
    default:
      return state;
  }
}
