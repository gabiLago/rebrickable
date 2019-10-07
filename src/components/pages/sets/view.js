import React from 'react';
import {SafeAreaView, TouchableOpacity, Image, FlatList} from 'react-native';
//import styles from './styles';
import * as api from '../../../api';
import _ from 'lodash';
import {Actions} from 'react-native-router-flux';

class Sets extends React.Component {
  state = {
    sets: [],
  };

  componentDidMount() {
    this._loadSetsList();
  }

  _loadSetsList = async () => {
    try {
      const getSetsRes = await api.getSets();
      const sets = _.get(getSetsRes, 'data.results', []);
      this.setState({sets: sets});
    } catch (e) {
      console.log('getSets err: ', e);
    }
  };

  _renderItem = ({item}) => {
    const imageDir = _.get(item, 'set_img_url');
    const setNum = _.get(item, 'set_num');

    if (imageDir !== null) {
      return (
        <TouchableOpacity
          style={{flex: 1}}
          onPress={set => console.log('Set Num: ', setNum)}>
          <Image
            source={{uri: imageDir}}
            style={{left: '5%', width: '90%', height: 300}}
          />
        </TouchableOpacity>
      );
    }
  };

  render() {
    const {sets} = this.state;
    console.log('sets: ', sets);
    return (
      <SafeAreaView>
        <FlatList
          data={sets}
          renderItem={this._renderItem}
          keyExtractor={(item, index) => `set-${index}`}
          numColumns={1}
        />
      </SafeAreaView>
    );
  }
}

export default Sets;