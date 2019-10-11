import React from 'react';
import {SafeAreaView, Text, View, TouchableOpacity} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import {styles, pickerSelectStyles} from './styles';
import {Actions} from 'react-native-router-flux';

class ThemePicker extends React.Component {
  constructor(props) {
    super(props);

    this.inputRefs = {};

    this.state = {
      initYear: undefined,
      initYearsArray: this._yearsRange(1980),
      finalYear: undefined,
      finalYearsArray: [],
      finalPickerDisabled: true,
    };
  }

  _onPress = () => {
    Actions.LegoSets({
      initYear: this.state.initYear,
      finalYear: this.state.finalYear,
    });
  };

  _yearsRange = start => {
    const finish = new Date().getFullYear();
    let yearsArray = [];
    for (let i = start; i <= finish; i++) {
      yearsArray.push({label: `${i}`, value: `${i}`});
    }
    return yearsArray;
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.picker} />

        <Text>Initial year for Sets release</Text>
        <RNPickerSelect
          placeholder={{
            label: 'Select the Initial Year...',
            value: null,
          }}
          items={this.state.initYearsArray}
          onValueChange={value => {
            this.setState({
              initYear: value,
              finalPickerDisabled: false,
              finalYearsArray: this._yearsRange(value),
            });
          }}
          onUpArrow={() => {
            this.inputRefs.name.focus();
          }}
          onDownArrow={() => {
            this.inputRefs.picker2.togglePicker();
          }}
          style={{...pickerSelectStyles}}
          value={this.state.favColor}
          ref={el => {
            this.inputRefs.picker = el;
          }}
        />

        <View style={styles.picker} />

        <Text>Final Year for Sets release</Text>
        <RNPickerSelect
          placeholder={{
            label: 'Select the Final Year...',
            value: null,
          }}
          items={this.state.finalYearsArray}
          onValueChange={value => {
            this.setState({
              finalYear: value,
            });
          }}
          onUpArrow={() => {
            this.inputRefs.picker.togglePicker();
          }}
          onDownArrow={() => {
            this.inputRefs.company.focus();
          }}
          style={{...pickerSelectStyles}}
          value={this.state.favSport}
          ref={el => {
            this.inputRefs.picker2 = el;
          }}
          disabled={this.state.finalPickerDisabled}
        />
        <TouchableOpacity style={{margin: 10}} onPress={this._onPress}>
          <Text>APPLY FILTERS</Text>
        </TouchableOpacity>
      </SafeAreaView>
    );
  }
}

export default ThemePicker;
