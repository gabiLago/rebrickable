import React from 'react';
import {TouchableOpacity, Image, View, Text} from 'react-native';
import _ from 'lodash';
import PropTypes from 'prop-types';
import styles from './styles';

class LegoSetsCell extends React.Component {
  render() {
    const {legoSet, onCellPress} = this.props;
    const legoSetImgUrl = _.get(legoSet, 'set_img_url');
    const name = _.get(legoSet, 'name');

    let imageSource;
    if (legoSetImgUrl !== null) {
      imageSource = {url: legoSetImgUrl};
    } else {
      imageSource = require('../../../assets/images/noImage.png');
    }

    return (
      <TouchableOpacity
        style={styles.container}
        onPress={() => onCellPress(legoSet)}>
        <Image source={imageSource} style={styles.images} />
        <View style={styles.nameContainer}>
          <Text style={styles.name}>{name}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}

export default LegoSetsCell;
