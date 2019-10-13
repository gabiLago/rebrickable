import React from 'react';
import {Text, View, Button} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import {styles, pickerSelectStyles} from './styles';
import {Actions} from 'react-native-router-flux';

class YearsForm extends React.Component {
  constructor(props) {
    super(props);

    this.inputRefs = {};

    this.state = {
      minYear: undefined,
      minYearsArray: this._yearsRange(1965),
      maxYear: undefined,
      maxYearsArray: [],
      maxPickerDisabled: true,
      theme: undefined,
      themes: [
        {
          label: 'Technic',
          value: 1,
        },
        {
          label: 'Creator',
          value: 22,
        },
        {
          label: 'Star Wars',
          value: 18,
        },
        {
          label: 'City',
          value: 50,
        },
      ],
    };
  }

  _onPress = () => {
    const actualParams = this.props.params;
    const {minYear, maxYear, theme} = this.state;
    let params = {
      ...actualParams,
    };
    let titleChain = '';

    if (minYear) {
      params = {
        ...params,
        min_year: parseInt(minYear, 10),
      };
      titleChain += minYear;
    }

    if (maxYear) {
      params = {
        ...params,
        max_year: parseInt(maxYear, 10),
      };
      titleChain += '-' + maxYear;
    }

    if (minYear && theme) {
      titleChain += ' | ';
    }

    if (theme) {
      params = {
        ...params,
        theme_id: theme,
      };
      switch (theme) {
        case 1:
          titleChain += 'Tehcnic';
          break;

        case 22:
          titleChain += 'Creator';
          break;

        case 18:
          titleChain += 'StarWars';
          break;

        case 50:
          titleChain += 'City';
          break;

        default:
          titleChain += '| All';
          break;
      }
    }

    this.props.updateQueryParams(params);

    Actions.LegoSets({title: `${titleChain}`});
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
      <View>
        <Text style={styles.filterTitle}>
          Choose a release years range and theme
        </Text>
        <View style={styles.yearsContainer}>
          <View style={styles.pickerContainer}>
            <Text style={styles.pickerLabel}>Min year:</Text>
            <RNPickerSelect
              placeholder={{
                label: 'Select Min Year',
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
                label: 'Select Max Year',
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
                this.inputRefs.pickerTheme.togglePicker();
              }}
              style={{...pickerSelectStyles}}
              value={this.state.maxYear}
              ref={el => {
                this.inputRefs.picker2 = el;
              }}
              disabled={this.state.finalPickerDisabled}
            />
          </View>
          <View style={styles.pickerContainer}>
            <Text style={styles.pickerLabel}>LEGO Theme:</Text>
            <RNPickerSelect
              placeholder={{
                label: 'Select a Theme...',
                value: null,
              }}
              items={this.state.themes}
              onValueChange={value => {
                this.setState({
                  theme: value,
                });
              }}
              onUpArrow={() => {
                this.inputRefs.picker2.togglePicker();
              }}
              onDownArrow={() => {
                this.inputRefs.company.focus();
              }}
              style={{...pickerSelectStyles}}
              value={this.state.theme}
              ref={el => {
                this.inputRefs.pickerTheme = el;
              }}
            />
          </View>
        </View>
        <View>
          <Button
            title={'Apply Filters'}
            style={styles.button}
            onPress={this._onPress}
          />
        </View>
      </View>
    );
  }
}

export default YearsForm;
