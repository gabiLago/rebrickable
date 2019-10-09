import View from './view';
import {connect} from 'react-redux';
import {setsActions} from '../../../redux/legoSets';

const mapStateToProps = state => {
  return {
    selectedItem: state.legoSets.selectedItem,
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    updateItem: set => {
      dispatch(setsActions.updateItem(set));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(View);
