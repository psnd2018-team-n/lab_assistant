import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';
import Component from '../../component/Top/Top';
import { TopState } from '../../reducer/top';
import { actions } from '../../action/top';

const mapStateToProps = (state: TopState) => state;
const mapDispatchToProps = (dispatch: Dispatch<any>) => ({ dispatch });;

export default connect<TopState, any>(mapStateToProps, mapDispatchToProps)(Component);
