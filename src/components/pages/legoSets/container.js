import View from './view';
import {connect} from 'react-redux';
import {setsActions} from '../../../redux/legoSets';

const mapStateToProps = state => {
  return {
    setsList: state.legoSets.list,
    isFetching: state.legoSets.isFetching,
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    fetchSetsList: () => {
      dispatch(setsActions.fetchSetsList());
    },
    updateItem: set => {
      dispatch(setsActions.updateItem(set));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(View);