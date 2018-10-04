/**
 * ユーザ種別
 */
export class UserType {
    id: number
    typeName: string
  /**
   * コンストラクタ
   * @param {Number} id ID
   * @param {String} typeName 種別名
   */
  constructor({
    id, typeName,
  }) {
    this.id = Number(id);
    this.typeName = String(typeName);
  }
}
