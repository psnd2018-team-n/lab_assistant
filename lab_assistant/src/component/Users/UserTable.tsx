import * as React from 'react';
import * as moment from 'moment';
import {
  Paper,
  Table,
  TableBody,
  TableHead,
  TableCell,
  TablePagination,
  TableRow,
} from '@material-ui/core';
import { User } from '../../entity';

/**
 * ユーザ一覧テーブル
 * @param {User[]} users ユーザ一覧
 * @param {number} page ページ番号
 * @param {number} rowsPerPage ページあたりの行数
 * @param {Function} onChangePage ページ変更関数
 * @param {Function} onChangeRowsPerPage ページあたりの行数変更関数
 * @return {JSX.Element} テーブル
 */
export const UserTable = (
  { users, page, rowsPerPage, onChangePage, onChangeRowsPerPage }
  : {
    users: User[],
    page: number,
    rowsPerPage: number,
    onChangePage: (event: React.MouseEvent<HTMLButtonElement> | null, page: number) => void,
    onChangeRowsPerPage: (event: React.ChangeEvent<HTMLTextAreaElement>) => void,
  }): JSX.Element => (
    <Paper>
      <TablePagination
        component="div"
        count={users.length}
        rowsPerPage={rowsPerPage}
        rowsPerPageOptions={[5, 10, 15]}
        page={page}
        onChangePage={onChangePage}
        onChangeRowsPerPage={onChangeRowsPerPage}
      />
      <Table>
        <UserTableHeader />
        <TableBody>
          {
            users.slice(page * rowsPerPage, (page + 1) * rowsPerPage)
              .map((user: User) => <UserTableRow key={user.id} user={user} />)
          }
        </TableBody>
      </Table>
      <TablePagination
        component="div"
        count={users.length}
        rowsPerPage={rowsPerPage}
        rowsPerPageOptions={[5, 10, 15]}
        page={page}
        onChangePage={onChangePage}
        onChangeRowsPerPage={onChangeRowsPerPage}
      />
    </Paper>
  );

/**
 * ユーザ一覧テーブルのヘッダ
 * @return {JSX.Element} ヘッダ
 */
export const UserTableHeader = (): JSX.Element => (
  <TableHead>
    <TableRow>
      <TableCell>名前</TableCell>
      <TableCell padding="none">種別</TableCell>
      <TableCell padding="none">性別</TableCell>
      <TableCell padding="none">年齢</TableCell>
      <TableCell padding="none">生年月日</TableCell>
      <TableCell padding="none">電話番号</TableCell>
      <TableCell padding="none">メールアドレス</TableCell>
    </TableRow>
  </TableHead>
);

/**
 * ユーザ一覧テーブルの1つの行
 * @param {User} user ユーザ情報
 * @return {JSX.Element} 行
 */
export const UserTableRow = ({ user }: { user: User }): JSX.Element => (
<TableRow
  hover
  onClick={() => console.warn('TODO ユーザ管理画面に飛ばす', user)}
>
  <TableCell component="th" scope="row">
  <div>
    <ruby>
      <span>{user.fullName}</span>
      <rt>{user.fullNameKana}</rt>
    </ruby>
  </div>
  </TableCell>
  <TableCell padding="none">
    {user.userTypes.map(t => t.typeName).join(',　')}
  </TableCell>
  <TableCell padding="none">
    {user.gender.name}
  </TableCell>
  <TableCell padding="none">
    {user.age}
  </TableCell>
  <TableCell padding="none">
    {moment(user.birthDate).format('YYYY月M月D日')}
  </TableCell>
  <TableCell padding="none">
    {user.phoneNumber}
  </TableCell>
  <TableCell padding="none">
    {user.mailAddress}
  </TableCell>
</TableRow>
);
