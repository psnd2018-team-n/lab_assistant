/**
 * 性別
 */
export class Gender {
  id: number
  name: string
  /**
   * コンストラクタ
   * @param {Number} id ID
   * @param {String} name 名前
   */
  constructor({
    id, name,
  }) {
    this.id = Number(id);
    this.name = String(name);
  }
}
