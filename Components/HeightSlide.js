import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import {CustomSlider} from './CustomSlider';

export default class HeightSlide extends Component{

  constructor(props) {
    super(props);
    this.state = { 
      singleSliderValues: [],
    //   multiSliderValues: [],
    }
}

  render() {
    return (
      <View style={styles.container}>

     {/* <Text style={styles.title}>Multi-Slider</Text>
        <CustomSlider
          min={1}
          max={7}
          LRpadding={40}
          callback={this.multiSliderValueCallback}
          single={false}
        /> */}

      <Text style={styles.title}>Feet</Text>
        <CustomSlider
          min={3}
          max={7}
          LRpadding={40}
          callback={this.singleSliderValueCallback}
          single={true}
        />
        
      </View>
    );
  }

  singleSliderValueCallback =(values)=> {
    this.setState({singleSliderValues : values})
  }

//   multiSliderValueCallback = (values) => {
//     this.setState({multiSliderValues : values})
//   }
}

const styles = StyleSheet.create({
  container: {
    top:0,
  },
  title:{
    marginLeft:20,
    fontSize:18,
  }

});





// import React from 'react';
// import { View, Text,StyleSheet } from 'react-native';
// import MultiSlider from '@ptomasroos/react-native-multi-slider';

// export default class HeightSlide extends React.Component {
//     state = {
//         values: [3,],
//     };

//     multiSliderValuesChange = (values) => {
//         this.setState({
//             values,
//         });
//     }

//     render() {
//         return (
//             <View style={{justifyContent:'center',alignSelf:'center'}}>
//                 <MultiSlider
//                     values={[ this.state.values[1]]}
//                     sliderLength={280}
//                     onValuesChange={this.multiSliderValuesChange}
//                     min={3}
//                     max={280}
//                     step={1}
//                 />
//                 <Text style={styles.text}>Two Markers:</Text>
//                 <Text style={styles.text}>{this.state.values[0]}</Text>
//                 <Text style={styles.text}>{this.state.values[1]}</Text>
//             </View>
//         )
//     }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     flexDirection: 'column',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   sliders: {
//     margin: 20,
//     width: 280,
//   },
//   text: {
//     alignSelf: 'center',
//     paddingVertical: 20,
//   },
//   title: {
//     fontSize: 30,
//   },
//   sliderOne: {
//     flexDirection: 'row',
//     justifyContent: 'space-around',
//   },
// });
