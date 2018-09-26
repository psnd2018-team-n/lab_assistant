class Column:
    """
    テーブルのカラム
    """
    def __init__(self, name, type, foreign_table = None):
        self.name = name
        self.type = type
        self.foreign_table = foreign_table


class Table:
    """
    DBのテーブル
    """

    def __init__(self, name, columns = None):
        self.name = name
        self.columns = columns or dict()

    def put_column(self, column):
        """
        テーブルにカラムをセットします
        """
        self.columns[column.name] = column


class DB:
    """
    DB
    """

    def __init__(self, tables = dict()):
        self.tables = tables

    def put_table(self, table):
        """
        DBにテーブルをセットします
        """
        self.tables[table.name] = table
