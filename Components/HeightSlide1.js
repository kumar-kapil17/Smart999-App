import React, { Component } from 'react';
 
import Slider from '@react-native-community/slider'
import sliderThumb from './Images/ruby.png';

import { View, Text, StyleSheet } from 'react-native';

export default class HeightSlide1  extends Component {
   constructor(props) {
   super(props);
   this.state = {
     //Initial Value of slider
     sliderValue: 11
   };
 }

  render() {
    return (
      <View style={styles.container}>
        
        <View style={{marginTop:-130,marginLeft:120}}>
        <Text style={{color: 'black',fontSize:20}}>{this.state.sliderValue} Inches </Text>
        </View>

        <Text style={{color: 'black',fontSize:15}}>Inches </Text>
        {/*Slider with max, min, step and initial value*/}
        <Slider 
          // style={{height:40,width:500,}}
          // style={{transform: [{ scaleX:0.3 }, { scaleY:0.3 }]}}
        thumbTintColor= 'red'
        sliderThumb ={20}
        //  thumbSize={50}
          maximumValue={11}
          minimumValue={0}
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