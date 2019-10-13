import React from 'react';
import {TouchableOpacity, Image, Dimensions, Text, View} from 'react-native';
import _ from 'lodash';
import PropTypes from 'prop-types';
import styles from './styles';

class LegoSetPartsCell extends React.Component {
  render() {
    const partData = this.props.partsListItem.part;
    const partImgUrl = partData.part_img_url;
    const partName = partData.name;

    if (partImgUrl !== null) {
      return (
        <View style={styles.container}>
          <Image source={{url: partImgUrl}} style={styles.images} />
          <Text style={styles.partName}>{partName}</Text>
        </View>
      );
    } else {
      return <Text>Lego Part</Text>;
    }
  }
}

export default LegoSetPartsCell;
