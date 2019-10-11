import View from './view';
import {connect} from 'react-redux';
import {setsActions} from '../../../redux/legoSets';

const mapStateToProps = state => {
  return {
    setsList: state.legoSets.list,
    isFetching: state.legoSets.isFetching,
    next: state.legoSets.next,
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    initSetsList: search => {
      dispatch(setsActions.initSetsList(search));
    },
    updateItem: set => {
      dispatch(setsActions.updateItem(set));
    },
    nextSetsList: url => {
      dispatch(setsActions.nextSetsList(url));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(View);
