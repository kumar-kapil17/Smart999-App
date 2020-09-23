
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
  {label: "Male", value: 0},
  {label: "Female", value: 1},
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
          labelStyle={{ fontSize: 20, }}
          disabled={false}
          formHorizontal={true}
          animation={true}
          style={{width:'100%',justifyContent:'space-evenly'}}
          
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'white',
    alignItems:'center',

    // marginLeft:30,
  },
});