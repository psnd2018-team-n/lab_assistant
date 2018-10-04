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
  TablePagination,
  TableRow,
  TextField,
  Paper,
} from '@material-ui/core';

import moment from 'moment';

import { USER_TYPES } from '../../constant/master';

/**
 * ユーザ一覧画面コンポーネント
 * @extends React.Component
 */
class Component extends React.Component {
  /**
   * Stateをセットする関数を作成
   * @param {String} [key] キーまたはインデックス
   * @return {Function} 関数
   */
  onSetState(key?) {
    return (e) => {
      const { type, name, value, checked } = e.target;
      if (type === 'checkbox') {
        this.props.setState(checked, name, key);
      } else {
        this.props.setState(value, name, key);
      }
    };
  }

  /**
   * 条件を適応する関数を作成
   * @return {Function} 関数
   */
  onApply() {
    return () => {
      this.props.searchUsers();
    };
  }

  /**
   * ページを変更する関数を作成
   * @return {Function} 関数
   */
  onChangePage() {
    return (_, page) => {
      this.props.changePage(page);
    };
  }

  /**
   * １ページあたりの行数を変更する関数を作成
   * @return {Function} 関数
   */
  onChangeRowsPerPage() {
    return (e) => {
      const rowsPerPage = e.target.value;
      this.props.changeRowsPerPage(rowsPerPage);
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
                {/* ユーザ名 */}
                <Grid item xs={12}>
                  <TextField
                    name="name"
                    label="ユーザ名"
                    value={this.props.name}
                    onChange={this.onSetState()}
                  />
                </Grid>
                {/* ユーザ種別 */}
                <Grid item xs={12}>
                  <Grid item xs={8}>
                    <FormControl component="fieldset" fullWidth>
                      <FormLabel component="legend">種別</FormLabel>
                      <FormGroup row>
                        {
                          USER_TYPES.map(ut => (
                            <Grid item xs={2} key={ut.id}>
                              <FormControlLabel
                                control={(
                                  <Checkbox
                                    name="userTypes"
                                    checked={this.props.userTypes[ut.id.toString()]}
                                    onChange={this.onSetState(ut.id.toString())}
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
                  <Button variant="contained" color="primary" onClick={this.onApply()}>適用</Button>
                </Grid>
              </Grid>
            </div>
            <hr />
            {/* ユーザ一覧 */}
            <Grid container spacing={24}>
              <Grid item xs={1} />
              <Grid item xs={10}>
                <UserTable
                  users={this.props.displayUsers}
                  page={this.props.page}
                  rowsPerPage={this.props.rowsPerPage}
                  onChangePage={this.onChangePage()}
                  onChangeRowsPerPage={this.onChangeRowsPerPage()}
                />
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
 * @return {Object} テーブル
 */
const UserTable = ({ users, page, rowsPerPage, onChangePage, onChangeRowsPerPage }) => (
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
            .map(user => <UserTableRow key={user.id} user={user} />)
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
