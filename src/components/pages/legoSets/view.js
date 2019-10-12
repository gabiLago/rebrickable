import React from 'react';
import {SafeAreaView, FlatList, RefreshControl} from 'react-native';
import styles from './styles';
import {Actions} from 'react-native-router-flux';
import {
  LegoSetsCell,
  SearchResults,
  Selector,
  SearchBox,
} from './../../molecules';

class Sets extends React.Component {
  componentDidMount() {
    const {initSetsList} = this.props;
    initSetsList();
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
    const {setsList, isFetching, search} = this.props;
    //TODO Limpiar la lista cuando se vuelve a pintar con cambio de parámetros
    return (
      <SafeAreaView style={styles.container}>
        <SearchBox />
        <SearchResults searchString={search} />
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
        <Selector first={'Add Your Set'} snd={'Filter Sets List'} />
      </SafeAreaView>
    );
  }
}

export default Sets;
