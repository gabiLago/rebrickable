import React from 'react';
import {TouchableOpacity, Image, Dimensions, Text} from 'react-native';
import _ from 'lodash';
import PropTypes from 'prop-types';
import styles from './styles';

class LegoSetsCell extends React.Component {
  render() {
    const {legoSet, onCellPress} = this.props;
    const setImgUrl = _.get(legoSet, 'set_img_url');
    console.log('legoSet: ', legoSet);
    console.log('onCellPressed: ', onCellPress);
    return (
      <TouchableOpacity style={{flex: 1}} onPress={() => onCellPress(legoSet)}>
        <Image
          source={{url: setImgUrl}}
          style={{
            width: '100%',
            height: 300,
            resizeMode: 'cover',
          }}
        />
      </TouchableOpacity>
    );
  }
}

export default LegoSetsCell;
