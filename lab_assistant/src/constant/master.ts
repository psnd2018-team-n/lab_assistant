import {
  Gender,
  UserType,
} from '../entity';

/** 性別マスタ */
export const GENDERS = [
  new Gender({ id: 1, name: '男' }),
  new Gender({ id: 1, name: '女' }),
];

/** ユーザ種別マスタ */
export const USER_TYPES = [
  new UserType({ id: 1, typeName: '管理者' }),
  new UserType({ id: 2, typeName: 'スタッフ' }),
  new UserType({ id: 3, typeName: '保護者' }),
  new UserType({ id: 4, typeName: '生徒' }),
];
