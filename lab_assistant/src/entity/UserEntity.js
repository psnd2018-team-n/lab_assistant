import moment from 'moment';

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
    this.id = id;
    this.userTypes = userTypes;
    this.gender = gender;
    this.lastName = lastName;
    this.firstName = firstName;
    this.lastNameKana = lastNameKana;
    this.firstNameKana = firstNameKana;
    this.birthDate = birthDate;
    this.phoneNumber = phoneNumber;
    this.mailAddress = mailAddress;
    this.deleteFlg = deleteFlg;
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
    const birth = moment(this.birthdate);
    return moment().diff(birth, 'years');
  }
}
