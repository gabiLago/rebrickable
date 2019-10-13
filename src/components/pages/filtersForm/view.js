import React from 'react';
import {SafeAreaView, Text, View, Button} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import {styles, pickerSelectStyles} from './styles';
import {Actions} from 'react-native-router-flux';

class FiltersForm extends React.Component {
  constructor(props) {
    super(props);

    this.inputRefs = {};

    this.state = {
      minYear: undefined,
      minYearsArray: this._yearsRange(1965),
      maxYear: undefined,
      maxYearsArray: [],
      maxPickerDisabled: true,
    };
  }

  _onPress = () => {
    const actualParams = this.props.params;
    const {minYear, maxYear} = this.state;
    const params = {
      ...actualParams,
      min_year: parseInt(minYear, 10),
      max_year: parseInt(maxYear, 10),
    };
    this.props.updateQueryParams(params);

    Actions.LegoSets({title: `Sets from: ${minYear}-${maxYear}`});
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
        <Text style={styles.filterTitle}>
          Choose a min and max release year
        </Text>
        <View style={styles.yearsContainer}>
          <View style={styles.pickerContainer}>
            <Text style={styles.pickerLabel}>Min year:</Text>
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
          </View>
          <View style={styles.pickerContainer}>
            <Text style={styles.pickerLabel}>Max Year:</Text>
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
          </View>
        </View>
        <Button
          title={'Apply Filters'}
          style={styles.button}
          onPress={this._onPress}
        />
      </SafeAreaView>
    );
  }
}

export default FiltersForm;
