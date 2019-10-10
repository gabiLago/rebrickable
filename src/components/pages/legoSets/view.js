import React from 'react';
import {SafeAreaView, FlatList, RefreshControl} from 'react-native';
//import styles from './styles';
import {Actions} from 'react-native-router-flux';
import {LegoSetsCell} from './../../molecules';

class Sets extends React.Component {
  componentDidMount() {
    this.props.initSetsList();
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
    const {isFetching, next} = this.props;
    const onEndReached = distanceFromEnd > 100 && !isFetching && next !== null;
    if (onEndReached) {
      this.props.nextSetsList(next);
    }
  };

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
              onRefresh={this.props.initSetsList}
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
