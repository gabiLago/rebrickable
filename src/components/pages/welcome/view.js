import React from 'react';
import {SafeAreaView, Image, TouchableOpacity, Text, Alert} from 'react-native';
import styles from './styles';
import {Actions} from 'react-native-router-flux';

class Welcome extends React.Component {
  render() {
    Alert.alert(
      'I´m using rebrickable API',
      'It´s really great, but just when I was finishing this practice... its server started to crash. I hope it wonn´t happen very often.',
      [
        {
          text: 'Tap on LEGO logo to begin',

          style: 'cancel',
        },
      ],
      {cancelable: false},
    );
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
          <Text>Tap on the logo to begin</Text>
        </Text>
      </SafeAreaView>
    );
  }
}

export default Welcome;
