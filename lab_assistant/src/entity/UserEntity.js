import moment from 'moment';

import {
  Gender,
  UserType,
} from '.';

/**
 * ユーザ
 */
export class User {
  /**
   * コンストラクタ
   * @param {Number} id ID
   * @param {UserType[]} userTypes ユーザ種別
   * @param {Gender} gender 性別
   * @param {String} lastName 苗字
   * @param {String} firstName 名前
   * @param {String} lastNameKana 苗字カナ
   * @param {String} firstNameKana 名前カナ
   * @param {Date} birthDate 生年月日
   * @param {String} phoneNumber 電話番号
   * @param {String} mailAddress メールアドレス
   * @param {Boolean} deleteFlg 削除フラグ
   */
  constructor({
    id, userTypes, gender, lastName, firstName, lastNameKana, firstNameKana,
    birthDate, phoneNumber, mailAddress, deleteFlg,
  }) {
    this.id = Number(id);
    this.userTypes = userTypes.map(e => new UserType(e));
    this.gender = new Gender(gender);
    this.lastName = String(lastName);
    this.firstName = String(firstName);
    this.lastNameKana = String(lastNameKana);
    this.firstNameKana = String(firstNameKana);
    this.birthDate = new Date(birthDate);
    this.phoneNumber = String(phoneNumber);
    this.mailAddress = String(mailAddress);
    this.deleteFlg = Boolean(deleteFlg);
  }

  /**
   * 氏名を取得します
   * @return {String} 氏名
   */
  get fullName() {
    return `${this.lastName} ${this.firstName}`;
  }

  /**
   * 氏名カナを取得します
   * @return {String} 氏名カナ
   */
  get fullNameKana() {
    return `${this.lastNameKana} ${this.firstNameKana}`;
  }

  /**
   * 年齢を取得します
   * @return {Number} 年齢
   */
  get age() {
    const birth = moment(this.birthDate);
    return moment().diff(birth, 'years');
  }
}
