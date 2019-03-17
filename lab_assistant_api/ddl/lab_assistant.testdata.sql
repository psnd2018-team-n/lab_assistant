-- insert test data.

-- insert master data.
-- コース
INSERT INTO course (
    id,
    name
)
VALUES
    (1, "Scratch"),
    (2, "Java"),
    (3, "その他")
;

-- 性別
INSERT INTO gender (
    id,
    name
)
VALUES
    (1, "男性"),
    (2, "女性"),
    (3, "その他")
;

-- ユーザ種別
INSERT INTO user_type (
    id,
    name
)
VALUES
    (1, "管理者"),
    (2, "スタッフ"),
    (3, "生徒"),
    (4, "保護者")
;

-- insert common data.
-- ユーザ
INSERT INTO user (
    id,
    gender_id,
    last_name,
    first_name,
    last_name_kana,
    first_name_kana,
    birth_date,
    phone_number,
    mail_address
)
VALUES
    (1, 1, "管理者", "太郎", "カンリシャ", "タロウ", "2000/01/01", "111-111-1111", "11111111@example.com"),
    (2, 3, "須袋布", "太郎", "スタッフ", "タロウ", "1999/12/31", "222-222-2222", "22222222@example.com"),
    (3, 2, "須袋布", "次郎", "スタッフ", "ジロウ", "2000/10/10", "333-333-3333", "33333333@example.com"),
    (4, 1, "生徒", "一太郎", "セイト", "イチタロウ", "2008/10/10", "444-444-4444", "44444444@example.com"),
    (5, 2, "保護者", "愛", "ホゴシャ", "アイ", "1980/10/10", "5555-55-5555", "55555555@example.com")
;

-- ユーザ
INSERT INTO user_user_type (
    user_id,
    user_type_id
)
VALUES
    (1, 1),
    (2, 1),
    (2, 2),
    (3, 2),
    (4, 3),
    (5, 4),
;
