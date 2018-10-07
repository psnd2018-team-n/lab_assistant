import * as React from 'react';
import { withRouter } from 'react-router-dom';
import {
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
  Grid,
  TextField,
  Paper,
} from '@material-ui/core';

import { USER_TYPES } from '../../constant/master';

import { UsersAction } from '../../action/users';
import { UsersState } from '../../reducer/users';
import { User } from '../../entity';
import { UserTable } from './UserTable';

type Props = UsersAction & UsersState;
interface State {}

/**
 * ユーザ一覧画面コンポーネント
 * @extends React.Component
 */
class Component extends React.Component<Props, State> {
  /**
   * Stateをセットする関数を作成
   * @param {string} [key] キーまたはインデックス
   * @return {Function} 関数
   */
  onSetState(key?: string): (e: React.ChangeEvent<HTMLInputElement>) => void {
    return (e: React.ChangeEvent<HTMLInputElement>) => {
      const { type, name, value, checked } = e.target;
      if (type === 'checkbox') {
        this.props.setState({ value: checked, name, key });
      } else {
        this.props.setState({ value, name, key });
      }
    };
  }

  /**
   * 条件を適応する関数を作成
   * @return {Function} 関数
   */
  onApply(): (_: React.MouseEvent) => void {
    return (_: React.MouseEvent) => {
      this.props.searchUsers();
    };
  }

  /**
   * ページを変更する関数を作成
   * @return {Function} 関数
   */
  onChangePage(): (_: React.MouseEvent<HTMLButtonElement> | null, page: number) => void {
    return (_: React.MouseEvent<HTMLButtonElement> | null, page: number): void => {
      this.props.changePage({ page });
    };
  }

  /**
   * １ページあたりの行数を変更する関数を作成
   * @return {Function} 関数
   */
  onChangeRowsPerPage(): (e: React.ChangeEvent<HTMLTextAreaElement>) => void {
    return (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      const rowsPerPage = Number(e.target.value);
      this.props.changeRowsPerPage({ rowsPerPage });
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

export default withRouter<any>(Component);
