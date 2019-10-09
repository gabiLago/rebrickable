import React from 'react';
import {Text, SafeAreaView, Image} from 'react-native';

class LegoSet extends React.Component {
  constructor(props){
    super(props);
  }

  static navigationOptions = {
    title: 'Home',
  };


  
  render() {
    const set = this.props.selectedItem;
    console.log('set: ', set);
    return (
      <SafeAreaView>
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
      </SafeAreaView>
    );
  }
}

export default LegoSet;
