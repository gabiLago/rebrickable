import React from 'react';
import {SafeAreaView} from 'react-native';
import {Filters} from '../../organisms';

class FiltersForm extends React.Component {
  render() {
    return (
      <SafeAreaView>
        <Filters />
      </SafeAreaView>
    );
  }
}

export default FiltersForm;
