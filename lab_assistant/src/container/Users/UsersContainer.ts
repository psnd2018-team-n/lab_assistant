import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Component from '../../component/Users/Users';
import { actions } from '../../action/users';
import { AppState } from '../../reducer';

const mapStateToProps = (state: AppState) => state.users;

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

const Container = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Component);

export default Container;
