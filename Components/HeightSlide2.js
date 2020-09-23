import React, { Component } from 'react';
 
import Slider from '@react-native-community/slider'
import sliderThumb from './Images/ruby.png';

import { View, Text, StyleSheet } from 'react-native';

export default class HeightSlide2  extends Component {
   constructor(props) {
   super(props);
   this.state = {
     //Initial Value of slider
     sliderValue: 7
   };
 }

  render() {
    return (
      <View style={styles.container}>
        
        <View style={{marginTop:-72,marginLeft:58,}}>
        <Text style={{color: 'black',fontSize:20}}>{this.state.sliderValue} Feet</Text>
        </View>

        <Text style={{color: 'black',fontSize:15}}>Feet</Text>
        {/*Slider with max, min, step and initial value*/}
        <Slider 
          thumbTintColor= 'red'
          sliderThumb ={20}
          maximumValue={7}
          minimumValue={3}
          thumbImage={sliderThumb}
          minimumTrackTintColor="gray"
          maximumTrackTintColor="green"
          step={1} 
          value={this.state.sliderValue}
          onValueChange={(sliderValue) => this.setState({ sliderValue })}
        />
      
      </View>
    );
  }
}
const styles = StyleSheet.create({
 container: {
   flex: 1,
   width:'95%',
   padding:20,
   justifyContent: 'center',
   alignSelf:'center',
   backgroundColor: 'white',

 }
});