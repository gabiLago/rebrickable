import React from 'react';
import {
  SafeAreaView,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  ActivityIndicator,
  Alert,
} from 'react-native';
import {Actions} from 'react-native-router-flux';
import _ from 'lodash';
//import ImagePicker from 'react-native-image-picker';

import styles from './styles';

/*

last_modified_dt: "2018-05-05T20:39:47.277922Z"
name: "Gears"
num_parts: 43
set_img_url: "https://cdn.rebrickable.com/media/sets/001-1.jpg"
set_num: "001-1"
set_url: "https://rebrickable.com/sets/001-1/gears/"
theme_id: 1
year: 1965
*/

class AddUserSet extends React.Component {
  state = {
    name: '',
    num_parts: 0,
    set_img_url: '',
    set_num: '0001-User Set',
    year: 1999,
  };

  _onSubmit = () => {
    const {isFetching} = this.props;
    const {name, num_parts, set_img_url, set_num} = this.state;
    if (isFetching) {
      return;
    }

    if (!name || !num_parts) {
      Alert.alert('Atencion', 'Complete el nombre y la edad');
      return;
    }

    const data = {
      name,
      num_parts: parseInt(num_parts, 10),
      set_img_url: null,
      set_num,
    };

    this.props.postUserSet(data);

    Actions.LegoSets();
  };

  render() {
    const {isFetching} = this.props;
    const {name, num_parts} = this.state;

    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>{'Set Name:'}</Text>
          <View style={styles.inputView}>
            <TextInput
              style={styles.input}
              value={name}
              onChangeText={name => this.setState({name})}
              placeholder={'Set Name'}
              placeholderTextColor={'rgba(255,255,255,0.6)'}
              underlineColorAndroid={'transparent'}
            />
          </View>
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>{'Total of Parts:'}</Text>
          <View style={styles.inputView}>
            <TextInput
              style={styles.input}
              value={String(num_parts)}
              onChangeText={num_parts => this.setState({num_parts})}
              placeholder={'Parts numbers'}
              placeholderTextColor={'rgba(255,255,255,0.6)'}
              underlineColorAndroid={'transparent'}
            />
          </View>

          <TouchableOpacity
            style={styles.buttonContainer}
            onPress={this._onSubmit}>
            <Text style={styles.buttonLabel}>{'Add your Set'}</Text>
            {isFetching ? (
              <ActivityIndicator
                color={'black'}
                style={styles.activityIndicator}
              />
            ) : null}
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }
}

export default AddUserSet;
