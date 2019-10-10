import View from './view';
import {connect} from 'react-redux';
import {setActions} from '../../../redux/legoSet';

const mapStateToProps = state => {
  return {
    selectedItem: state.legoSets.selectedItem,
    isFetching: state.legoSet.isFetching,
    partsList: state.legoSet.list,
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    fetchSetPartsList: legoSetNum => {
      dispatch(setActions.fetchSetPartsList(legoSetNum));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(View);
