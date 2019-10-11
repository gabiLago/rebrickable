import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import {styles, pickerSelectStyles} from './styles';
import {Actions} from 'react-native-router-flux';

class Selector extends React.Component {
  _onPressFilter = () => {
    Actions.FiltersForm();
  };

  _onPressAdd = () => {
    Actions.Welcome();
  };

  render() {
    return (
      <View>
        <TouchableOpacity onPress={this._onPressFilter}>
          <Text>Filtrar</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this._onPressAdd}>
          <Text>Añadir</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
export default Selector;
