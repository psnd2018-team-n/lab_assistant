/**
 * ユーザ種別
 */
export class UserType {
  id: number;
  typeName: string;
  /**
   * コンストラクタ
   * @param {number} id ID
   * @param {string} typeName 種別名
   */
  constructor({
    id, typeName,
  }: any) {
    this.id = Number(id);
    this.typeName = String(typeName);
  }
}
