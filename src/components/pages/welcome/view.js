import React from 'react';
import {SafeAreaView, Image, TouchableOpacity, Text} from 'react-native';
import styles from './styles';
import {Actions} from 'react-native-router-flux';

class Welcome extends React.Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.title}>Brick like water, my friend.</Text>
        <TouchableOpacity onPress={Actions.LegoSets}>
          <Image source={require('../../../assets/images/legoLogo.png')} />
        </TouchableOpacity>
        
        <Text style={styles.disclaimerTitle}>Disclaimer:</Text>
        <Text style={styles.disclaimer}>
          <Text>This app uses the great API from </Text>
          <Text style={styles.textBold}>rebrickable.{'\n'}</Text>
          <Text>we´re so greatful... it´s an Amazing Job! {'\n'}</Text>
          <Text>
            sometimes anyway, the load of the images goes sloooow{'\n'} and the app looks like
            broken {'\n'}<Text style={styles.textBold}>it´s not!</Text>
          </Text>
        </Text>
      </SafeAreaView>
    );
  }
}

export default Welcome;
