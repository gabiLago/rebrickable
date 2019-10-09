import React from 'react';
import {TouchableOpacity, Image, Dimensions, Text} from 'react-native';
import _ from 'lodash';
import PropTypes from 'prop-types';
import styles from './styles';

class LegoSetsCell extends React.Component {
  render() {
    const {legoSet, onCellPress} = this.props;
    const legoSetImgUrl = _.get(legoSet, 'set_img_url');
    const name = _.get(legoSet, 'name');

    if (legoSetImgUrl !== null) {
      return (
        <TouchableOpacity
          style={{flex: 1}}
          onPress={() => onCellPress(legoSet)}>
          <Image
            source={{url: legoSetImgUrl}}
            style={{
              width: '100%',
              height: 300,
              resizeMode: 'cover',
            }}
          />
        </TouchableOpacity>
      );
    } else {
      return <Text>{name}</Text>;
    }
  }
}

export default LegoSetsCell;
