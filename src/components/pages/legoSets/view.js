import React from 'react';
import {
  SafeAreaView,
  TouchableOpacity,
  Image,
  FlatList,
  RefreshControl,
} from 'react-native';
//import styles from './styles';
import * as api from '../../../api';
import _ from 'lodash';
import {Actions} from 'react-native-router-flux';
import {LegoSetsCell} from './../../molecules';

class Sets extends React.Component {
  componentDidMount() {
    this.props.fetchSetsList();
  }

  _renderItem = ({item}) => {
    return (
      <LegoSetsCell
        legoSet={item}
        onCellPress={legoSet => this._onCellPressed(legoSet)}
      />
    );
  };

  _onCellPressed = legoSet => {
    this.props.updateItem(legoSet);
    Actions.SetDetails();
  };

  render() {
    const {setsList, isFetching} = this.props;
    return (
      <SafeAreaView>
        <FlatList
          data={setsList}
          renderItem={this._renderItem}
          keyExtractor={(item, index) => `set-${index}`}
          numColumns={1}
          extraData={this.props.isFetching}
          refreshControl={
            <RefreshControl
              refreshing={isFetching}
              onRefresh={this.props.fetchSetsList}
              tintColor={'black'}
              colors={['black']}
            />
          }
        />
      </SafeAreaView>
    );
  }
}

export default Sets;
