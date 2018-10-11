-- initialize all tables in lab_assistant database.

-- delete tables if exists.
DROP TABLE IF EXISTS user;
DROP TABLE IF EXISTS user_type;
DROP TABLE IF EXISTS gender;
-- DROP TABLE IF EXISTS staff;
-- DROP TABLE IF EXISTS enquete;
-- DROP TABLE IF EXISTS participant;
-- DROP TABLE IF EXISTS work_report;
-- DROP TABLE IF EXISTS lesson;
-- DROP TABLE IF EXISTS course;
-- DROP TABLE IF EXISTS work;
-- DROP TABLE IF EXISTS progress;
-- DROP TABLE IF EXISTS product;

-- create tables.
-- master data tables.
CREATE TABLE user_type (
    id int NOT NULL PRIMARY KEY,
    name varchar(32) NOT NULL,
    del_flg tinyint(1) NOT NULL DEFAULT 0,
    create_by int(8) NOT NULL DEFAULT 99999999,
    create_at timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP(),
    update_by int(8) NOT NULL DEFAULT 99999999,
    update_at timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP()
);

CREATE TABLE gender (
    id int NOT NULL PRIMARY KEY,
    name varchar(32),
    del_flg tinyint(1) NOT NULL DEFAULT 0,
    create_by int(8) NOT NULL DEFAULT 99999999,
    create_at timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP(),
    update_by int(8) NOT NULL DEFAULT 99999999,
    update_at timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP()
);

-- common data tables.
CREATE TABLE user (
    id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
    user_type_id int NOT NULL,
    gender_id int NOT NULL,
    last_name varchar(32),
    first_name varchar(32),
    last_name_kana varchar(32),
    first_name_kana varchar(32),
    birth_date date,
    phone_number varchar(16),
    mail_address varchar(256),
    del_flg tinyint(1) NOT NULL DEFAULT 0,
    create_by int(8) NOT NULL DEFAULT 99999999,
    create_at timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP(),
    update_by int(8) NOT NULL DEFAULT 99999999,
    update_at timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP(),
    FOREIGN KEY(user_type_id) REFERENCES user_type(id),
    FOREIGN KEY(gender_id) REFERENCES gender(id)
);

-- CREATE TABLE staff;
-- CREATE TABLE enquete;
-- CREATE TABLE participant;
-- CREATE TABLE work_report;
-- CREATE TABLE lesson;
-- CREATE TABLE course;
-- CREATE TABLE work;
-- CREATE TABLE progress;
-- CREATE TABLE product;

-- add indexes for tables.
-- ADD INDEX...