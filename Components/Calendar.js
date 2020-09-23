// import React, { useState } from "react";
// import { Button, StyleSheet, View, TouchableOpacity,Text } from "react-native";
// import DateTimePickerModal from "react-native-modal-datetime-picker";

// const Calendar = () => {
//   const [pickerMode, setPickerMode] = useState(null);

//   const showDatePicker = () => {
//     setPickerMode("date");
//   };

 

//   const hidePicker = () => {
//     setPickerMode(null);
//   };

//   const handleConfirm = (date) => {
//     console.warn("A date has been picked: ", date);
//     hidePicker();
//   };

//   return (
//     <View style={style.root}>

//             <TouchableOpacity style={{height:60,width:'90%',alignSelf:'center',borderBottomWidth:1,borderColor:'gray'}}
//                 onPress={showDatePicker}>
//                 <Text style={{marginTop:20}}>Show Date Picker { handleConfirm } </Text>
//             </TouchableOpacity>

  
     
//       <DateTimePickerModal
//         isVisible={pickerMode !== null}
//         mode={pickerMode}
//         onConfirm={handleConfirm}
//         onCancel={hidePicker}
//         isDarkModeEnabled={true}
//       />
//     </View>
//   );
// };

// const style = StyleSheet.create({
//   root: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//   },
// });

// export default Calendar;




import React, { Component } from 'react';
import { View, Text,TouchableOpacity } from 'react-native';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import moment from "moment";

export default class Calendar extends Component {
  constructor(props) {
    super(props);
    this.state = {
        isVisible:false,
        chosenDate : ''
    };
  }

  handlePicker = (date) => {
      this.setState({
          isVisible:false,
          chosenDate : moment(date).format('DD/MM/YYYY')
      })
  }

  showPicker = () => {
    this.setState({
        isVisible:true
    })
  }


  hidePicker = () => {
    this.setState({
        isVisible:false,
       
    })
}






  render() {
    return (
      <View style={{flex:1}}>

               {/* <Text style={{fontSize:20,textAlign:'center'}}>
                   {this.state.chosenDate}
               </Text> */}


               <TouchableOpacity  style={{height:60,width:'90%',marginTop:0,}}
                 onPress ={this.showPicker}  >
                   <Text style={{marginTop:15,fontSize:20,textAlign:'left',marginLeft:-15}}>D.O.B: {this.state.chosenDate}</Text>
               </TouchableOpacity>
       
             <DateTimePickerModal
                isVisible={this.state.isVisible}
                // mode={date}
                onConfirm={this.handlePicker}
                onCancel={ this.hidePicker}
                // isDarkModeEnabled={true}
            />




      </View>
    );
  }
}
