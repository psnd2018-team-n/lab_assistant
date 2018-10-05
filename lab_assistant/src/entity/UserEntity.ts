import * as moment from 'moment';

import {
  Gender,
  UserType,
} from '.';

/**
 * ユーザ
 */
export class User {
  id: number
  userTypes: UserType[]
  gender: Gender
  lastName: string
  firstName: string
  lastNameKana: string
  firstNameKana: string
  birthDate: Date
  phoneNumber: string
  mailAddress: string
  deleteFlg: boolean

  /**
   * コンストラクタ
   * @param {number} id ID
   * @param {UserType[]} userTypes ユーザ種別
   * @param {Gender} gender 性別
   * @param {string} lastName 苗字
   * @param {string} firstName 名前
   * @param {string} lastNameKana 苗字カナ
   * @param {string} firstNameKana 名前カナ
   * @param {Date} birthDate 生年月日
   * @param {string} phoneNumber 電話番号
   * @param {string} mailAddress メールアドレス
   * @param {boolean} deleteFlg 削除フラグ
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
   * @return {string} 氏名
   */
  get fullName(): string {
    return `${this.lastName} ${this.firstName}`;
  }

  /**
   * 氏名カナを取得します
   * @return {string} 氏名カナ
   */
  get fullNameKana(): string {
    return `${this.lastNameKana} ${this.firstNameKana}`;
  }

  /**
   * 年齢を取得します
   * @return {number} 年齢
   */
  get age(): number {
    const birth = moment(this.birthDate);
    return moment().diff(birth, 'years');
  }
}
