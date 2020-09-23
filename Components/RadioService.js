
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
  {label: "", value: 0},
  {label: "", value: 1},
  {label: "", value: 2},
  {label: "", value: 3},
  // {label: "Soaking in the mud", value: 2},
];

export default class RadioService extends Component {
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
          labelStyle={{ fontSize: 20,padding:13 , }}
          disabled={false}
        //   formHorizontal={true}
          animation={true}
          style={{width:'100%',justifyContent:'space-evenly',top:15,padding:10,}}
          
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