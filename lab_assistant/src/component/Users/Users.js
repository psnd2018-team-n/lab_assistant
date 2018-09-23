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
      <TableCell>
        種別
      </TableCell>
      <TableCell>
        電話番号
      </TableCell>
      <TableCell>
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
    onClick={() => console.warn('TODO ユーザ管理画面に飛ばす')}
  >
    <TableCell component="th" scope="row">
      <div>
        <ruby>
          <rb>{user.name}</rb>
          <rt>{user.nameKana}</rt>
        </ruby>
      </div>
    </TableCell>
    <TableCell>
      {user.userTypes.map(t => t.name).join(',　')}
    </TableCell>
    <TableCell>
      {user.tel}
    </TableCell>
    <TableCell>
      {user.email}
    </TableCell>
  </TableRow>
);

export default withRouter(Component);
