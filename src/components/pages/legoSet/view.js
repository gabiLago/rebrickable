import React from 'react';
import {
  Text,
  SafeAreaView,
  Image,
  FlatList,
  View,
} from 'react-native';
import {LegoSetPartsCell} from '../../molecules';
import {Actions} from 'react-native-router-flux';
import _ from 'lodash';
import styles from './styles'; 

class LegoSet extends React.Component {

  componentDidMount() {
    this.props.fetchSetPartsList(this.props.selectedItem.set_num);
  }

  _renderItem = ({item}) => {
    return <LegoSetPartsCell partsListItem={item} />;
  };

  render() {
    const set = this.props.selectedItem;
    const {partsList, isFetching, fetchSetPartsList} = this.props;
    return (
      <SafeAreaView style={styles.container}>
         <Image
            source={{url: set.set_img_url}}
            style={{
              width: '75%',
              height: 200
            }}
          />
        <Text>{set.name}</Text>
        <Text>Set nº: {set.set_num}</Text>
        <Text>Número de piezas: {set.num_parts}</Text>
        <Text>{set.year}</Text>
        <Text>Url: {set.set_url}</Text>
        <FlatList
          data={partsList}
          renderItem={this._renderItem}
          keyExtractor={(item, index) => `part-${index}`}
          extraData={this.props.isFetching}
        />
      </SafeAreaView>
    );
  }
}

export default LegoSet;
