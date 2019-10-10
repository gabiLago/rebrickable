import React from 'react';
import {SafeAreaView, FlatList, RefreshControl} from 'react-native';
//import styles from './styles';
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
    Actions.LegoSet({title: 'LEGO ' + legoSet.set_num});
  };

  _onEndReached = ({distanceFromEnd}) => {
    console.log('endReached')
  }

  render() {
    const {setsList, isFetching} = this.props;
    return (
      <SafeAreaView>
        <FlatList
          data={setsList}
          renderItem={this._renderItem}
          keyExtractor={(item, index) => `set-${index}`}
          extraData={this.props.isFetching}
          onEndReached={this._onEndReached}
          onEndReachedThreshold={0.8}
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
