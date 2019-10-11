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
      return(<View></View>)
    }
  }
}

export default SearchResults;
