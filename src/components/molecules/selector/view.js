import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import {styles} from './styles';
import {Actions} from 'react-native-router-flux';

// TODO Reemplar por TabBar de verdad en el router

class Selector extends React.Component {
  _onPressFilter = () => {
    Actions.FiltersForm();
  };

  _onPressAdd = () => {
    Actions.AddUserSet();
  };

  render() {
    const {first, snd} = this.props;
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this._onPressAdd}>
          <Text>{first}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this._onPressFilter}>
          <Text>{snd}</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
export default Selector;
