import React from 'react';
import {TouchableOpacity, Image, Dimensions, Text, View} from 'react-native';
import _ from 'lodash';
import PropTypes from 'prop-types';
import styles from './styles';

class LegoSetPartsCell extends React.Component {
  render() {
    const partData = this.props.partsListItem.part;
    
    console.log('item: ', partData);
    const partImgUrl = partData.part_img_url;
    const partName = partData.name;
    
    if (partImgUrl !== null) {
      return (
        <View>
        <Text>{partName}</Text>
        <Image
            source={{url: partImgUrl}}
            style={{
              width: '100%',
              height: 300,
              resizeMode: 'cover',
            }}
          />
      </View>
      )

    } else {
      return <Text>Pieza de Lego</Text>;
    }
  }
}

export default LegoSetPartsCell;
