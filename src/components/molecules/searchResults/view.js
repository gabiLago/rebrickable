import React from 'react';
import {View, Text} from 'react-native';
import _ from 'lodash';
import PropTypes from 'prop-types';
import styles from './styles';

class SearchResults extends React.Component {
  render() {
    const {searchString} = this.props;
    if (searchString !== undefined) {
      return <Text>Search results for {searchString}</Text>;
    } else {
      // TODO: Ver cómo meter según lógica un elemento en el render, esto es una ñapa
      return(<View></View>)
    }
  }
}

export default SearchResults;
