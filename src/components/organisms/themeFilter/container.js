import View from './view';
import {connect} from 'react-redux';
import {themesActions} from '../../../redux/legoThemes';

const mapStateToProps = state => {
  return {
    themes: state.legoThemes.themes,
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    legoThemesList: () => {
      dispatch(themesActions.legoThemesList());
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(View);
