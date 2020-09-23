import React, { Component } from 'react';
import { FlatList, TouchableOpacity, StyleSheet,Image } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import { getContrastYIQ } from './HelperFunctions';

export default class ColorPicker extends Component {
  state = {
    colors: this.props.colors,
    selectedColor: this.props.selectedColor,
  };

  renderItem = ({ item }) => {
    const fontColor = getContrastYIQ(item);
    return (
    <TouchableOpacity
      style={[styles.circle, { backgroundColor: item }]}
      onPress={() => {
        this.setState({ selectedColor: item });
        this.props.onSelect(item);
      }}>
      {this.state.selectedColor === item &&
        
        <Entypo name="check" size={24} color="white" />}
    </TouchableOpacity>
  )};

  _keyExtractor = (item, index) => index;

  render() {
    return (
      <FlatList
        data={this.state.colors}
        extraData={this.state}
        renderItem={this.renderItem}
        keyExtractor={this._keyExtractor}
        horizontal={true}
        showsHorizontalScrollIndicator = {false}
        keyboardShouldPersistTaps="always"
        style={{ maxHeight:80 }}
      />
    );
  }
}

const styles = StyleSheet.create({
  circle: {
    width: 50,
    height: 50,
    borderRadius: 50,
    margin:5,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop:30
  },
});