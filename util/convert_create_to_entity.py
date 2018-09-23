#!/usr/bin/env python3
"""
CREATE文からjsのentityを生成します
"""
import sys
import re
import argparse

import db

IGNORE_COLUMN_NAMES = ['create_by', 'create_at', 'update_by', 'update_at']

TARGET_CLASS_NAME = 'user'

CONSTRUCTOR_BASE = \
    '/**\n'\
    ' * コンストラクタ\n'\
    '{member_doc}\n'\
    ' */\n'\
    'constructor({{\n'\
    '  {member},\n'\
    '}}) {{\n'\
    '{initialize}\n'\
    '}}'

ENTITY_BASE = \
    '/**\n'\
    ' * [{entity_name} description]\n'\
    ' */\n'\
    'export class {entity_name} {{\n'\
    '{constructor}\n'\
    '}}'

DB_JS_TYPE_RELATION = dict(
    Boolean=re.compile(r'tinyint\(1\)|bool'),
    Date=re.compile(r'date|time'),
    String=re.compile(r'char|text'),
    Number=re.compile(r'.*'))

parser = argparse.ArgumentParser()
parser.add_argument("-t", "--table", help="テーブル名", required=True)
args = parser.parse_args()

def main():
    """
    メイン関数
    """
    text = ''.join(sys.stdin.readlines()).lower()

    # crete文を抽出
    create_ptn = re.compile(r'create table [\w_]*\(.+?\);', re.DOTALL)

    database = db.DB()
    for create in create_ptn.findall(text):
        database.put_table(convert_create_to_table(create))

    print(get_entity(args.table, database))


def convert_create_to_table(create_str):
    """
    create文をテーブルに変換します
    """
    lines = [l.strip() for l in create_str.split('\n')]

    table_name = re.match(r'create table ([\w_]+?)\(', lines[0]).group(1)
    new_table = db.Table(table_name)
    for l in lines[1:-1]:
        c = l.split(' ')
        if c[0] in IGNORE_COLUMN_NAMES:
            continue

        if c[0] != 'foreign':
            #e.g. ['gender_id', 'int', 'not', 'null,']
            new_table.put_column(db.Column(c[0], c[1].replace(',', '')))
        else:
            # e.g. ['foreign', 'key(gender_id)', 'references', 'gender(id)']
            key = re.match(r'key\((.*)\)', c[1]).group(1)
            table = re.match(r'(.+?)\(.+\)', c[3]).group(1)
            new_table.columns[key].foreign_table = table

    return new_table


def get_entity(table_name, database):
    """
    js用のエンティティを文字列で取得します
    """
    if table_name not in database.tables.keys():
        raise KeyError("not found table '{}'".format(table_name))
    table = database.tables[table_name]

    member_doc = '\n'.join([' * @param {{{}}} {} [description]'.format(
        get_type(c), get_name(c)) for c in table.columns.values()])
    member = ', '.join([get_name(c) for c in table.columns.values()])
    initialize = '\n'.join(['  this.{0} = {0};'.format(
        get_name(c)) for c in table.columns.values()])

    jsdoc = CONSTRUCTOR_BASE.format(
        member_doc=member_doc,
        member=member,
        initialize=initialize)

    return ENTITY_BASE.format(
            entity_name=camel_to_snake(table_name[0].upper() + table_name[1:]),
            constructor=re.sub(r'(.*)', lambda x: '  ' + x.group(1), jsdoc))

def get_name(column):
    """
    表示用のカラム名を取得します
    """
    return camel_to_snake(column.foreign_table or column.name)

def get_type(column):
    """
    表示用の型名を取得します
    """
    type = ''
    if column.foreign_table:
        type = camel_to_snake(column.foreign_table)
    else:
        for t, ptn in DB_JS_TYPE_RELATION.items():
            if ptn.search(column.type):
                type = t
                break

    type = type[0].upper() + type[1:]
    return type

def camel_to_snake(str):
    """
    スネークケースをキャメルケースに変換します
    """
    return re.sub(r'_(.)', lambda x: x.group(1).upper(), str)

if __name__ == "__main__":
    main()
