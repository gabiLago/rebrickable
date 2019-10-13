import React from 'react';
import {Text, SafeAreaView, Image, FlatList, View} from 'react-native';
import {LegoSetPartsCell} from '../../molecules';
import {Actions} from 'react-native-router-flux';
import _ from 'lodash';
import styles from './styles';

class LegoSet extends React.Component {
  componentDidMount() {
    const {initialSetPartsList, selectedItem} = this.props;
    initialSetPartsList(selectedItem.set_num);
  }

  _renderItem = ({item}) => {
    return <LegoSetPartsCell partsListItem={item} />;
  };

  _onEndReached = ({distanceFromEnd}) => {
    const {isFetching, next} = this.props;
    const onEndReached = distanceFromEnd > 10 && !isFetching && next !== null;
    if (onEndReached) {
      this.props.nextSetPartsList(next);
    }
  };

  render() {
    const set = this.props.selectedItem;
    const legoSetImgUrl = set.set_img_url;
    const {partsList, isFetching} = this.props;
    let imageSource;
    if (legoSetImgUrl !== null) {
      imageSource = {url: legoSetImgUrl};
    } else {
      imageSource = require('../../../assets/images/noImage.png');
    }

    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.title}>{set.name}</Text>
        <Image source={imageSource} style={styles.images} />
        <View style={styles.textsContainer}>
          <Text style={styles.textsInfo}>Release year: {set.year}</Text>
          <Text style={styles.textsInfo}>Parts: {set.num_parts}</Text>
        </View>
        <Text style={styles.title}>Parts List</Text>
        <FlatList
          data={partsList}
          renderItem={this._renderItem}
          keyExtractor={(item, index) => `part-${index}`}
          extraData={isFetching}
          onEndReached={this._onEndReached}
          onEndReachedThreshold={0.8}
        />
      </SafeAreaView>
    );
  }
}

export default LegoSet;
