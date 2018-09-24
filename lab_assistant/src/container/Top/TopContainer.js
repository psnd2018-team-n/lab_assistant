import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Component from '../../component/Top/Top';
import * as Actions from '../../action/top';

const mapStateToProps = state => state.Top;

const mapDispatchToProps = dispatch => bindActionCreators(Actions, dispatch);

const Container = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Component);

export default Container;
