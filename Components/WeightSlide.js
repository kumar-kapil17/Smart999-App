import React, { Component } from 'react';
 
import Slider from '@react-native-community/slider'
import sliderThumb from './Images/ruby.png';

import { View, Text, StyleSheet } from 'react-native';

export default class WeightSlide  extends Component {
   constructor(props) {
   super(props);
   this.state = {
     //Initial Value of slider
     sliderValue: 200
   };
 }

  render() {
    return (
      
      <View style={styles.container}>
        {/*Text to show slider value*/}

        <View>
        <Text style={{color: 'black',fontSize:20,marginTop:-156,marginLeft:20}}>{this.state.sliderValue} Kgs</Text>
        </View>
        
        {/*Slider with max, min, step and initial value*/}
        <Slider 
          maximumValue={200}
          minimumValue={0}

          thumbImage={sliderThumb}
          minimumTrackTintColor="gray"
          maximumTrackTintColor="#000000"
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
//    flex: 1,
    height:80,
    width:'95%',
   padding:20,
   justifyContent: 'center',

   backgroundColor: 'white',

 }
});