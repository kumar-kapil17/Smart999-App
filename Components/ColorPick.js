import React, { Component } from 'react';
import { Text, View, StyleSheet, } from 'react-native';

// import { ColorPicker } from 'react-native-status-color-picker';
import ColorPicker from './ColorPicker';

export default class ColorPick extends Component {
  state = {
    colors: ["black", "gray", "orange", "brown", "red", ],
    selectedColor: '',
  };

  onSelect = color => this.setState({ selectedColor: color });

  render() {
    return (
      <View >
       <View style={{marginTop:-35,marginLeft:0}}>
          <Text style={{fontSize:20,}}>Selected Color : {this.state.selectedColor}</Text>
       </View>

       <View style={styles.container}>
        <ColorPicker
          colors={this.state.colors}
          selectedColor={this.state.selectedColor}
          onSelect={this.onSelect}
        />
        </View>

        

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    height:90,
    width:'95%',
    alignItems: 'center',
    justifyContent: 'center',
    // alignSelf:'center',
    alignContent:'center',
    marginTop:10
  },
});
