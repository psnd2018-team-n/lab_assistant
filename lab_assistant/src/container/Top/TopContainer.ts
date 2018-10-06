import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import Component from '../../component/Top/Top';
import { actions } from '../../action/top';
import { AppState } from '../../reducer';
import { TopState } from '../../reducer/top';

const mapStateToProps = (state: AppState) => ({ ...state.top });

function mapDispatchToProps(dispatch: Dispatch<any>) {
  return {
    syncDate: (v: string) => dispatch(actions.syncDate(v))
  };
}

export default connect<TopState, any>(mapStateToProps, mapDispatchToProps)(Component);
