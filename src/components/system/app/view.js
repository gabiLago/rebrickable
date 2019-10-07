import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import styles from './styles';

class App extends React.Component {
  render() {
    return (
      <SafeAreaView>
        <Text style={styles.initText}>INIT APP</Text>
      </SafeAreaView>
    );
  }
}

export default App;
