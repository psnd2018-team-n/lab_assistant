import {
  User,
} from '../entity';

const userTypeNames: any = {
  1: '管理者',
  2: 'スタッフ',
  3: '保護者',
  4: '生徒',
};
const genderNames: any = {
  1: '男',
  2: '女',
};

const createGenderDate = (id: number, name: string = genderNames[id]) => ({
  id, name,
});
const createUserTypeData = (id: number, typeName: string = userTypeNames[id]) => ({
  id, typeName,
});
const createUserDate = (id: number, userTypeIds: number[], genderId: number, lastName: string, firstName: string,
  lastNameKana: string, firstNameKana: string, birthDate: string, phoneNumber: string, mailAddress: string, deleteFlg: boolean) => (
  {
    id,
    userTypes: userTypeIds.map(i => createUserTypeData(i)),
    gender: createGenderDate(genderId),
    lastName,
    firstName,
    lastNameKana,
    firstNameKana,
    birthDate,
    phoneNumber,
    mailAddress,
    deleteFlg,
  }
);

const users = [
  createUserDate(1, [1, 2], 1, '渡邉', '航平', 'ワタナベ', 'コウヘイ',
    'Wed Jul 29 1998 00:00:00 GMT+0900 (JST)', '090-1234-5678', 'lab-assistant@example.com', false),
  createUserDate(2, [4], 1, '河野', '洋平', 'コウノ', 'ヨウヘイ',
    'Sat Jan 01 2000 00:00:00 GMT+0900 (JST)', '090-1234-5678', 'lab-assistant@example.com', false),
  createUserDate(3, [4], 1, '内田', '俊彦', 'ウチダ', 'トシヒコ',
    'Sat Jan 01 2000 00:00:00 GMT+0900 (JST)', '090-1234-5678', 'lab-assistant@example.com', false),
  createUserDate(4, [4], 1, '谷口', '大祐', 'タニグチ', 'ダイスケ',
    'Sat Jan 01 2000 00:00:00 GMT+0900 (JST)', '090-1234-5678', 'lab-assistant@example.com', false),
  createUserDate(5, [3], 1, '中川', '啓', 'ナカガワ', 'ケイ',
    'Sat Jan 01 2000 00:00:00 GMT+0900 (JST)', '090-1234-5678', 'lab-assistant@example.com', false),
  createUserDate(6, [4], 1, '岩田', '裕樹', 'イワタ', 'ユウキ',
    'Sat Jan 01 2000 00:00:00 GMT+0900 (JST)', '090-1234-5678', 'lab-assistant@example.com', false),
  createUserDate(7, [3], 1, '大野', '翔太郎', 'オオノ', 'ショウタロウ',
    'Sat Jan 01 2000 00:00:00 GMT+0900 (JST)', '090-1234-5678', 'lab-assistant@example.com', false),
  createUserDate(8, [4], 2, '山本', '悠', 'ヤマモト', 'ハルカ',
    'Sat Jan 01 2000 00:00:00 GMT+0900 (JST)', '090-1234-5678', 'lab-assistant@example.com', false),
  createUserDate(9, [4], 2, '奥村', '友美', 'オクムラ', 'トモミ',
    'Sat Jan 01 2000 00:00:00 GMT+0900 (JST)', '090-1234-5678', 'lab-assistant@example.com', false),
  createUserDate(10, [3], 2, '北村', '徳子', 'キタムラ', 'ノリコ',
    'Sat Jan 01 2000 00:00:00 GMT+0900 (JST)', '090-1234-5678', 'lab-assistant@example.com', false),
  createUserDate(11, [3], 2, '石山', 'さおり', 'イシヤマ', 'サオリ',
    'Sat Jan 01 2000 00:00:00 GMT+0900 (JST)', '090-1234-5678', 'lab-assistant@example.com', false),
  createUserDate(12, [3], 2, '奥野', '亜矢子', 'オクノ', 'アヤコ',
    'Sat Jan 01 2000 00:00:00 GMT+0900 (JST)', '090-1234-5678', 'lab-assistant@example.com', false),
  createUserDate(13, [4], 2, '富岡', '美咲', 'トミオカ', 'ミサキ',
    'Sat Jan 01 2000 00:00:00 GMT+0900 (JST)', '090-1234-5678', 'lab-assistant@example.com', false),
  createUserDate(14, [3], 2, '岸本', '香澄', 'キシモト', 'カスミ',
    'Sat Jan 01 2000 00:00:00 GMT+0900 (JST)', '090-1234-5678', 'lab-assistant@example.com', false),
].map(d => new User(d));

function api(func: Function) {
  return ({ asyncFlg = true, ...prams } = {}) => {
    if (asyncFlg) {
      return func(prams);
    }
    return new Promise(() => func(prams));
  };
}

export const getAllUsers = api(() => users);
