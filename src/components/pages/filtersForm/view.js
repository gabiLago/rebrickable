import React from 'react';
import {SafeAreaView, Text, View, Button} from 'react-native';
import {styles} from './styles';
import {Actions} from 'react-native-router-flux';
import {YearsFilter} from '../../organisms';

class FiltersForm extends React.Component {
  _onPress = () => {
    const actualParams = this.props.params;
    const {minYear, maxYear} = this.state;
    const params = {
      ...actualParams,
      min_year: parseInt(minYear, 10),
      max_year: parseInt(maxYear, 10),
    };
    this.props.updateQueryParams(params);

    Actions.LegoSets({title: `Sets from: ${minYear}-${maxYear}`});
  };

  render() {
    return (
      <SafeAreaView>
        <YearsFilter />
      </SafeAreaView>
    );
  }
}

export default FiltersForm;
