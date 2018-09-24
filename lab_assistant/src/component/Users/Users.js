import React from 'react';
import { withRouter } from 'react-router-dom';
import {
  Grid,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableFooter,
  TableRow,
  Paper,
} from '@material-ui/core';

import moment from 'moment';
import { ApplicationBar } from '../Common';

/**
 * ユーザ一覧画面コンポーネント
 * @extends React.Component
 */
class Component extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {};
  }

  onApply() {
    return () => {
      this.props.getUsers();
    };
  }

  render() {
    return (
      <div>
        <ApplicationBar Home />
        <div>
          <Paper>
            <Grid container spacing={24}>
              <Grid item xs={1} />
              <Grid item xs={10}>
                <Paper>
                  <Table>
                    <UserTableHeader />
                    <TableBody>
                      {
                        this.props.displayUsers
                          .map(user => <UserTableRow key={user.id} user={user} />)
                      }
                    </TableBody>
                  </Table>
                </Paper>
              </Grid>
            </Grid>
          </Paper>
        </div>
      </div>
    );
  }
}

/**
 * ユーザ一覧テーブルのヘッダ
 * @return {Object} ヘッダ
 */
const UserTableHeader = () => (
  <TableHead>
    <TableRow>
      <TableCell>
        名前
      </TableCell>
      <TableCell padding="none">
        種別
      </TableCell>
      <TableCell padding="none">
        性別
      </TableCell>
      <TableCell padding="none">
        年齢
      </TableCell>
      <TableCell padding="none">
        生年月日
      </TableCell>
      <TableCell padding="none">
        電話番号
      </TableCell>
      <TableCell padding="none">
        メールアドレス
      </TableCell>
    </TableRow>
  </TableHead>
);

/**
 * ユーザ一覧テーブルの1つの行
 * @param {Object} user ユーザ情報
 * @return {Object} 行
 */
const UserTableRow = ({ user }) => (
  <TableRow
    hover
    onClick={() => console.warn('TODO ユーザ管理画面に飛ばす', user)}
  >
    <TableCell component="th" scope="row">
      <div>
        <ruby>
          <rb>{user.fullName}</rb>
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

export default withRouter(Component);
