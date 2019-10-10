import React from 'react';
import {View, Text, FlatList} from 'react-native';

class FlatListDemo extends React.Component {
  render() {
    return (
      <FlatList
        data={[{key: 'a'}, {key: 'b'}]}
        renderItem={({item}) => <Text>{item.key}</Text>}
      />
    );
  }
}

export default FlatListDemo;
