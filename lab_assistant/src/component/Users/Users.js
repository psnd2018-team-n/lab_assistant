import React from 'react';
import { withRouter } from 'react-router-dom';
import {
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Paper,
} from '@material-ui/core';

import moment from 'moment';

import { USER_TYPE } from '../../constant/master';

/**
 * ユーザ一覧画面コンポーネント
 * @extends React.Component
 */
class Component extends React.Component {
  onChangeUserType(id) {
    return () => {
      this.props.changeUserType(id);
    };
  }

  onApply() {
    return () => {
      this.props.searchUsers();
    };
  }

  render() {
    return (
      <div>
        <div>
          <Paper>
            {/* 条件 */}
            <div style={{ margin: 10 }}>
              <Grid container spacing={24}>
                {/* ユーザ種別条件 */}
                <Grid item xs={12}>
                  <Grid item xs={8}>
                    <FormControl component="fieldset" fullWidth>
                      <FormLabel component="legend">種別</FormLabel>
                      <FormGroup row>
                        {
                          Object.values(USER_TYPE).map(ut => (
                            <Grid item xs={2} key={ut.id}>
                              <FormControlLabel
                                control={(
                                  <Checkbox
                                    checked={this.props.checkedUserTypes.contain(ut.id)}
                                    value={String(ut.id)}
                                    onChange={this.onChangeUserType(ut.id)}
                                  />
                                )}
                                label={ut.typeName}
                              />
                            </Grid>
                          ))
                        }
                      </FormGroup>
                    </FormControl>
                  </Grid>
                </Grid>
                <Grid item>
                  <Button variant="contained" color="primary" onClick={this.onApply()}>適応</Button>
                </Grid>
              </Grid>
            </div>
            <hr />
            {/* ユーザ一覧 */}
            <Grid container spacing={24}>
              <Grid item xs={1} />
              <Grid item xs={10}>
                <UserTable users={this.props.displayUsers} />
              </Grid>
            </Grid>
          </Paper>
        </div>
      </div>
    );
  }
}

/**
 * ユーザ一覧テーブル
 * @param {User[]} users ユーザ一覧
 */
const UserTable = ({ users }) => (
  <Paper>
    <Table>
      <UserTableHeader />
      <TableBody>
        {
          users.map(user => <UserTableRow key={user.id} user={user} />)
        }
      </TableBody>
    </Table>
  </Paper>
);

/**
 * ユーザ一覧テーブルのヘッダ
 * @return {Object} ヘッダ
 */
const UserTableHeader = () => (
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
