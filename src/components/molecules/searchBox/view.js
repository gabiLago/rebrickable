import React from 'react';
import {View, TextInput} from 'react-native';
import styles from './styles';
import {Actions} from 'react-native-router-flux';

class SearchBox extends React.Component {
  state = {
    searchString: '',
  };

  _onSubmit = event => {
    const actualParams = this.props.params;
    const params = {
      ...actualParams,
      search: event.nativeEvent.text,
    };
    this.props.updateQueryParams(params);
    Actions.LegoSets();
  };

  render() {
    const {searchString} = this.state;

    console.log('this.state: ', this.state);
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          value={searchString}
          onChangeText={searchString => this.setState({searchString})}
          placeholder={'Search by Set Name'}
          returnKeyType={'search'}
          inlineImageLeft={'search_icon'}
          onSubmitEditing={event => {
            this._onSubmit(event);
          }}
        />
      </View>
    );
  }
}

export default SearchBox;
