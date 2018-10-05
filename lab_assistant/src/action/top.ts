export const SYNC_DATE = 'SYNC_DATE';

/**
 * 時間の同期
 * @return {object} アクション
 */
export function syncDate(): object {
  return {
    type: SYNC_DATE,
    payload: {},
    meta: {},
  };
}
