import {
  Gender,
  UserType,
} from '../entity';

/** 性別マスタ */
export const GENDER = {
  MALE: new Gender({ id: 1, name: '男' }),
  FEMALE: new Gender({ id: 1, name: '女' }),
};

/** ユーザ種別マスタ */
export const USER_TYPE = {
  MANAGER: new UserType({ id: 1, typeName: '管理者' }),
  STAFF: new UserType({ id: 2, typeName: 'スタッフ' }),
  GUARDIAN: new UserType({ id: 3, typeName: '保護者' }),
  STUDENT: new UserType({ id: 4, typeName: '生徒' }),
};
