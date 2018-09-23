import moment from 'moment';

/**
 * ユーザ
 */
export class User {
  /**
   * コンストラクタ
   * @param {Number} id ID
   * @param {String} name 名前
   * @param {String} nameKana 名前カナ
   * @param {Gender} gender 性別
   * @param {Date} birthdate 生年月日
   * @param {UserType[]} userTypes ユーザタイプ
   * @param {String} email メールアドレス
   * @param {String} tel 電話番号
   */
  constructor({
    id, name, nameKana, gender, birthdate, userTypes, email, tel,
  }) {
    this.id = id;
    this.name = name;
    this.nameKana = nameKana;
    this.gender = gender;
    this.birthdate = birthdate;
    this.userTypes = userTypes;
    this.email = email;
    this.tel = tel;
  }

  /**
   * 年齢を取得します
   * @return {Number} 年齢
   */
  get age() {
    const birth = moment(this.birthdate);
    return moment().diff(birth, 'years');
  }
}
