import View from './view';
import {connect} from 'react-redux';
import {setsActions} from '../../../redux/sets';

const mapStateToProps = state => {
  console.log('state: ', state);
  return {
    setsList: state.sets.list,
    isFetching: state.sets.isFetching,
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    fetchSetsList: list => {
      dispatch(setsActions.fetchSetsList());
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(View);
