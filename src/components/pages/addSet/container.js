import View from './view';
import {connect} from 'react-redux';
import {setActions} from '../../../redux/legoSet';

const mapStateToProps = state => {
  return {
    selectedItem: state.legoSets.selectedItem,
    isFetching: state.legoSet.isFetching,
    partsList: state.legoSet.list,
    next: state.legoSet.next,
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    initialSetPartsList: legoSetNum => {
      dispatch(setActions.initialSetPartsList(legoSetNum));
    },
    nextSetPartsList: url => {
      dispatch(setActions.nextSetPartsList(url));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(View);
