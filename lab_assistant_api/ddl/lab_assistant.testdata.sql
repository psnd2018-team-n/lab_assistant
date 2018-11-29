-- insert test data.

-- insert master data.
-- ユーザー種別マスタ
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

-- 性別マスタ
INSERT INTO gender (
    id,
    name
)
VALUES
    (1, "男性"),
    (2, "女性"),
    (3, "その他")
;

-- insert common data.
-- ユーザー
INSERT INTO user (
    user_type_id,
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
    (1, 1, "hoge1", "hoge1", "hoge1", "hoge1", "2001/10/10", "111-111-1111", "11111111@111.11.11"),
    (2, 3, "hoge2", "hoge2", "hoge2", "hoge2", "2002/10/10", "222-222-2222", "22222222@222.22.22"),
    (3, 2, "hoge3", "hoge3", "hoge3", "hoge3", "2003/10/10", "333-333-3333", "33333333@333.33.33"),
    (3, 2, "hoge4", "hoge4", "hoge4", "hoge4", "2004/10/10", "444-444-4444", "44444444@444.44.44"),
    (4, 1, "hoge5", "hoge5", "hoge5", "hoge5", "2005/10/10", "555-555-5555", "55555555@555.55.55")
;