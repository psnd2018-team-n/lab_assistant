import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Component from '../../component/Users/Users';
import * as Actions from '../../action/users';

const mapStateToProps = state => state.Users;

const mapDispatchToProps = dispatch => bindActionCreators(Actions, dispatch);

const Container = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Component);

export default Container;
