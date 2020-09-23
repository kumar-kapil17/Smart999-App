
//use me

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ToastAndroid
} from 'react-native';

import RadioForm, {
  RadioButton, 
  RadioButtonInput, 
  RadioButtonLabel
} from 'react-native-simple-radio-button';

var hobbies = [
  {label: "A+", value: 0},
  {label: "A-", value: 1},
  {label: "B+", value: 0},
  {label: "B-", value: 1},
  {label: "O+", value: 0},
  {label: "O-", value: 1},
  {label: "AB+", value: 0},
  {label: "AB-", value: 1},
  // {label: "Soaking in the mud", value: 2},
];

export default class Radio extends Component {
  render() {
    return (
      <View style={styles.container}>
        <RadioForm
          radio_props={hobbies}
          initial={-1}
          onPress={(value) => {}}
          buttonSize={10}
          buttonOuterSize={20}
          buttonColor={'gray'}
          selectedButtonColor={'black'}
          // selectedLabelColor={'green'}
          labelStyle={{ fontSize: 20,left:80, }}
          disabled={false}
          formHorizontal={false}
          // labelHorizontal={true}

          animation={true}
          style={{width:'100%',marginLeft:65,marginTop:20}}
          
        />
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: 'white',
    alignItems:'center',
  
    

    // marginLeft:30,
  },
});