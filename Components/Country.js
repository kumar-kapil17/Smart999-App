// import React, { Component } from 'react';
// import {
//   StyleSheet,
//   Text,
//   View,
//   StatusBar,
//   PixelRatio,
//   TouchableOpacity,
// } from 'react-native';
// import CountryPicker from 'react-native-country-picker-modal';



// export default class Country extends Component {
//   constructor(props){
//     StatusBar.setHidden(true);
//     super(props);
//     this.state = {
//       cca2: 'US',
//       cca2Empty: null
//     };
//   }

//   render() {
//     return (
//       <View style={{flex:1}}>
//         <Text style={styles.welcome}>
//           Welcome to Country Picker!
//         </Text>
      
       
//         <CountryPicker
//           ref={(countryPicker) => { this.countryPicker = countryPicker; }}
//           onChange={(value)=> this.setState({country: value, cca2: value.cca2})}
//           cca2={this.state.cca2}
         
//         />

     
      
//         {this.state.country &&
//           <Text style={styles.data}>
//             {JSON.stringify(this.state.country, null, 2)}
//           </Text>
//         }
        
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//     container: {
//       flex: 1,
//       justifyContent: 'center',
//       alignItems: 'center'
//     },
//     welcome: {
//       fontSize: 25,
//       fontWeight: 'bold',
//       textAlign: 'center',
//       margin: 10,
//       marginBottom: 25,
//     },
//     instructions: {
//       fontSize: 20,
//       textAlign: 'center',
//       color: '#888',
//       marginBottom: 7
//     },
//     link: {
//       fontSize: 14,
//       textAlign: 'center',
//       color: '#888',
//       textDecorationLine: 'underline'
//     },
//     data: {
//       padding: 15,
//       marginTop: 10,
//       backgroundColor: '#ddd',
//       borderColor: '#888',
//       borderWidth: 1 / PixelRatio.get(),
//       color: '#777'
//     }
//   });
  


import React, { Component } from "react";
import { Platform, I18nManager, StyleSheet, Text, View } from "react-native";
import CountryPicker from './CountryPicker'
import CountryJSON from './countries.json'
//import DeviceInfo from "react-native-device-info";

export default class Country extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mCountryCode: "91"
    };
    let userLocaleCountryCode = "";
   // userLocaleCountryCode = DeviceInfo.getDeviceCountry();

    try {
      if (userLocaleCountryCode) {
        const newData = CountryJSON.filter(function(item) {
          const itemData = item.name.common.toUpperCase();
          const textData = userLocaleCountryCode.toUpperCase();
          return itemData.startsWith(textData);
        });
        if (newData.length > 0) {
          this.state.mCountryCode = newData[0].callingCode;
        } else {
          this.setState({ mCountryCode: "91" });
        }
      } else {
        this.setState({ mCountryCode: "91" });
      }
    } catch (e) {
      console.error(e.message);
    }
  }

  _selectedValue = index => {
    this.setState({ mCountryCode: index });
  };


  render() {
    return (
      <View style={styles.container}>

      <Text style={{color:'#000',fontSize:25,marginBottom:25,fontWeight:'bold'}}></Text>
       
        {/* <CountryPicker
          disable={false}
          animationType={'slide'}
          containerStyle={styles.pickerStyle}
          pickerTitleStyle={styles.pickerTitleStyle}
          dropDownImage={require("./Images/down.png")}
          selectedCountryTextStyle={styles.selectedCountryTextStyle}
          countryNameTextStyle={styles.countryNameTextStyle}
          pickerTitle={"Country Picker"}
          searchBarPlaceHolder={"Search......"}
          hideCountryFlag={true}
          hideCountryCode={false}
          searchBarStyle={styles.searchBarStyle}
          backButtonImage={require("./Images/black.png")}
          searchButtonImage={require("./Images/search.png")}
          countryCode={this.state.mCountryCode}
          selectedValue={this._selectedValue}
        /> */}



           {/* <CountryPicker
          disable={false}
          animationType={'fade'}
          containerStyle={styles.pickerStyle}
          pickerTitleStyle={styles.pickerTitleStyle}
          dropDownImage={require("./Images/down.png")}
          selectedCountryTextStyle={styles.selectedCountryTextStyle}
          countryNameTextStyle={styles.countryNameTextStyle}
          pickerTitle={"Country Picker"}
          searchBarPlaceHolder={"Search......"}
          hideCountryFlag={false}
          hideCountryCode={true}
          searchBarStyle={styles.searchBarStyle}
          backButtonImage={require("./Images/black.png")}
          searchButtonImage={require("./Images/search.png")}
          countryCode={this.state.mCountryCode}
          selectedValue={this._selectedValue}
        /> */}



           <CountryPicker
          disable={false}
          animationType={'slide'}
          containerStyle={styles.pickerStyle}
          pickerTitleStyle={styles.pickerTitleStyle}
          dropDownImage={require("./Images/down.png")}
          selectedCountryTextStyle={styles.selectedCountryTextStyle}
          countryNameTextStyle={styles.countryNameTextStyle}
          // pickerTitle={"Country Picker"}
          searchBarPlaceHolder={"Search......"}
          hideCountryFlag={false}
          hideCountryCode={false}
          searchBarStyle={styles.searchBarStyle}
          backButtonImage={require("./Images/black.png")}
          searchButtonImage={require("./Images/search.png")}
          countryCode={this.state.mCountryCode}
          selectedValue={this._selectedValue}
        />

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:'flex-start',
    // alignItems: "center",
    backgroundColor: "white"
  },
  pickerTitleStyle: {
    justifyContent: "flex-start",
    flexDirection: "row",
    // alignItems: "center",
    // textAlign: "center",
    // alignSelf: "center",
    fontWeight: "bold",
    flex: 1,
    marginTop: 5,
    fontSize: 15,
    color: "#000"
  },
  pickerStyle: {
    height: 60,
    width: 80,
    marginBottom:10,
    // justifyContent: "center",
    padding: 10,
    // borderWidth: 2,
    marginLeft:20,
    // borderColor: "#303030",
    backgroundColor: "white"
  },
  selectedCountryTextStyle: {
    paddingLeft: 5,
    paddingRight: 5,
    color: "#000",
    textAlign: "right"
  },

  countryNameTextStyle: {
    paddingLeft: 10,
    color: "#000",
    textAlign: "right"
  },

  searchBarStyle: {
    flex: 1,
    borderRadius: 50,
    borderWidth: 4,

    borderColor: "#D3D3D3",
    justifyContent: "center",
    flexDirection: "row",
    marginTop: 10,
    marginLeft: 8,
    marginBottom: 5,
    marginRight: 12,
    paddingLeft: 20,
    paddingRight: 10
  }
});