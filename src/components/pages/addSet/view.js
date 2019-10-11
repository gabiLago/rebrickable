import React from 'react';
import {
  Text,
  TextInput,
  SafeAreaView,
  Image,
  FlatList,
  View,
} from 'react-native';
import {Actions} from 'react-native-router-flux';
import _ from 'lodash';
import styles from './styles';

class AddSet extends React.Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <TextInput />
      </SafeAreaView>
    );
  }
}

export default AddSet;
