import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Users from '../../component/Users/Users';
import { actions } from '../../action/users';
import { AppState } from '../../reducer';

const mapStateToProps = (state: AppState) => state.users;

const mapDispatchToProps = (dispatch: any) => bindActionCreators(actions, dispatch);

const Container = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Users);

export default Container;
