/**
 * ユーザ種別
 */
export class UserType {
  /**
   * コンストラクタ
   * @param {Number} id ID
   * @param {String} typeName 種別名
   */
  constructor({
    id, typeName,
  }) {
    this.id = id;
    this.typeName = typeName;
  }
}
