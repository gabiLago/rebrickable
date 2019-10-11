import React from 'react';
import {SafeAreaView} from 'react-native';
import {ThemePicker} from './../../molecules';

class FiltersForm extends React.Component {
  render() {
    return (
      <SafeAreaView>
        <ThemePicker />
      </SafeAreaView>
    );
  }
}

export default FiltersForm;
