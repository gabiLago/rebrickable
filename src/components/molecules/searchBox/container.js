import View from './view';
import {connect} from 'react-redux';
import {setsActions} from '../../../redux/legoSets';

const mapStateToProps = state => {
  return {
    params: state.legoSets.params,
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    updateQueryParams: params => {
      dispatch(setsActions.updateQueryParams(params));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(View);
