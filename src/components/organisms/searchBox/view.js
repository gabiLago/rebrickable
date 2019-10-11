import React from 'react';
import {View, TextInput} from 'react-native';
import styles from './styles';
import {Actions} from 'react-native-router-flux';

class SearchBox extends React.Component {
  state = {
    searchString: '',
  };

  render() {
    const {searchString} = this.state;
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          value={searchString}
          onChangeText={searchString => this.setState({searchString})}
          placeholder={'Search by Set Name'}
          returnKeyType={'search'}
          inlineImageLeft={'search_icon'}
          onSubmitEditing={event =>
            Actions.LegoSets({search: event.nativeEvent.text})
          }
        />
      </View>
    );
  }
}

export default SearchBox;
