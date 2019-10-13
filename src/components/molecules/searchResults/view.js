import React from 'react';
import {Text} from 'react-native';
import _ from 'lodash';
import styles from './styles';

class SearchResults extends React.Component {
  render() {
    const {searchString} = this.props;
    return (
      <Text style={styles.results}>Search results for {searchString}</Text>
    );
  }
}

export default SearchResults;
