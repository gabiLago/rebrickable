import View from './view';
import {connect} from 'react-redux';
import {setsActions} from '../../../redux/legoSets';

const mapStateToProps = state => {
  return {
    isFetching: state.legoSets.isFetching,
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    postUserSet: data => dispatch(setsActions.postUserSet(data)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(View);
