import React from 'react';
import {SafeAreaView, Text, View, TouchableOpacity} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import {styles, pickerSelectStyles} from './styles';
import {Actions} from 'react-native-router-flux';

class FiltersForm extends React.Component {
  constructor(props) {
    super(props);

    this.inputRefs = {};

    this.state = {
      minYear: undefined,
      minYearsArray: this._yearsRange(1980),
      maxYear: undefined,
      maxYearsArray: [],
      maxPickerDisabled: true,
    };
  }

  _onPress = () => {
    const actualParams = this.props.params;
    const params = {
      ...actualParams,
      min_year: parseInt(this.state.minYear, 10),
      max_year: parseInt(this.state.maxYear, 10),
    };
    this.props.updateQueryParams(params);
    Actions.LegoSets();
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
      <SafeAreaView>
        <View style={styles.picker} />

        <Text>Min year for Sets release</Text>
        <RNPickerSelect
          placeholder={{
            label: 'Select the Min Year for the sets to show...',
            value: null,
          }}
          items={this.state.minYearsArray}
          onValueChange={value => {
            this.setState({
              minYear: value,
              maxPickerDisabled: false,
              maxYearsArray: this._yearsRange(value),
            });
          }}
          onUpArrow={() => {
            this.inputRefs.name.focus();
          }}
          onDownArrow={() => {
            this.inputRefs.picker2.togglePicker();
          }}
          style={{...pickerSelectStyles}}
          value={this.state.minYear}
          ref={el => {
            this.inputRefs.picker = el;
          }}
        />

        <View style={styles.picker} />

        <Text>Final Year for Sets release</Text>
        <RNPickerSelect
          placeholder={{
            label: 'Select the Max Year for the sets to show...',
            value: null,
          }}
          items={this.state.maxYearsArray}
          onValueChange={value => {
            this.setState({
              maxYear: value,
            });
          }}
          onUpArrow={() => {
            this.inputRefs.picker.togglePicker();
          }}
          onDownArrow={() => {
            this.inputRefs.company.focus();
          }}
          style={{...pickerSelectStyles}}
          value={this.state.maxYear}
          ref={el => {
            this.inputRefs.picker2 = el;
          }}
          disabled={this.state.finalPickerDisabled}
        />
        <TouchableOpacity style={styles.button} onPress={this._onPress}>
          <Text>APPLY FILTERS</Text>
        </TouchableOpacity>
      </SafeAreaView>
    );
  }
}

export default FiltersForm;
