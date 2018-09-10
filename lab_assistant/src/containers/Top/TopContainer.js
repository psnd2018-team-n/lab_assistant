import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Component from '../../components/Top/Top';
import * as Actions from '../../actions/top';

const mapStateToProps = state => state.Top;

const mapDispatchToProps = dispatch => bindActionCreators(Actions, dispatch);

const Container = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Component);

export default Container;
