import * as Action from '../action/top';

/**
 * ステータスの初期値を返します
 * @return {Object}     初期値
 */
const initialState = () => ({
  time: new Date(),
});

/**
 * 画面のリデューサ
 * @param  {Object} [state=initialState] 画面の状態
 * @param  {Object} action               アクション
 * @return {Object}                      画面の状態
 */
export default function reducer(state = initialState(), action) {
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
