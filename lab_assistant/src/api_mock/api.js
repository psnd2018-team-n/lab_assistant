const userTypeName = {
  1: '管理者',
  2: 'スタッフ',
  3: '保護者',
  4: '生徒',
};
const genderName = {
  1: '男',
  2: '女',
};

const User = (id, name, nameKana, userTypeIds, genderId, tel, email) => ({
  id,
  name,
  nameKana,
  userTypes: userTypeIds.map(uid => ({ id: uid, name: userTypeName[uid] })),
  gender: { id: genderId, name: genderName[genderId] },
  tel,
  email,
});

const users = [
  User(1, '渡邉 航平', 'わたなべ こうへい', [1, 2], 1, '090-1234-5678', 'mail@example.com'),
  User(2, '内海 順一', 'うつみ じゅんいち', [3], 1, '090-1234-5678', 'mail@example.com'),
  User(3, '苅谷 慶太', 'かりや けいた', [3], 1, '090-1234-5678', 'mail@example.com'),
  User(4, '河合 悠', 'かわい はるか', [3], 2, '090-1234-5678', 'mail@example.com'),
  User(5, '小磯 順', 'こいそ じゅん', [3], 1, '090-1234-5678', 'mail@example.com'),
  User(6, '曹 敬三', 'そう けいぞう', [3], 1, '090-1234-5678', 'mail@example.com'),
  User(7, '前原 真理子', 'まえはら まりこ', [4], 2, '090-1234-5678', 'mail@example.com'),
  User(8, '本山 貴子 ', 'もとやま たかこ', [4], 2, '090-1234-5678', 'mail@example.com'),
  User(9, '岩井 勉', 'いわい つとむ', [4], 1, '090-1234-5678', 'mail@example.com'),
  User(10, '内田 幸太郎', 'うちだ こうたろう', [4], 1, '090-1234-5678', 'mail@example.com'),
  User(11, '大石 信也', 'おおいし しんや', [4], 1, '090-1234-5678', 'mail@example.com'),
  User(12, '田代 徹也', 'たしろ てつや', [4], 1, '090-1234-5678', 'mail@example.com'),
];

function api(func) {
  return ({ asyncFlg = true, ...prams } = {}) => {
    if (asyncFlg) {
      return func(prams);
    }
    return new Promise(() => func(prams));
  };
}

export const getAllUsers = api(() => users);
