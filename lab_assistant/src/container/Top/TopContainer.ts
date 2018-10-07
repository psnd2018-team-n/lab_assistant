import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Top from '../../component/Top/Top';
import { actions } from '../../action/top';
import { AppState } from '../../reducer';

const mapStateToProps = (state: AppState) => state.top;

const mapDispatchToProps = (dispatch: any) => bindActionCreators(actions, dispatch);

const Container = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Top);

export default Container;
