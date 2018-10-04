export const SYNC_DATE = 'SYNC_DATE';

/**
 * 時間の同期
 * @return {Object} アクション
 */
export function syncDate() {
  return {
    type: SYNC_DATE,
    payload: {},
    meta: {},
  };
}
