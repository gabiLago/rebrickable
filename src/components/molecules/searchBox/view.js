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

    let titleString = 'Sets from: ';

    if (actualParams) {
      const {min_year, max_year} = actualParams;
      console.log('ActualParams: ', actualParams);
      if (min_year) {
        titleString += min_year;
      }
      if (max_year) {
        titleString += '-' + max_year;
      }
    }

    const params = {
      ...actualParams,
      search: event.nativeEvent.text,
    };
    this.props.updateQueryParams(params);
    /*
    let titleString = 'Sets from: ';

*/
    Actions.LegoSets({
      title: titleString,
    });
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
          onSubmitEditing={event => {
            this._onSubmit(event);
          }}
        />
      </View>
    );
  }
}

export default SearchBox;
