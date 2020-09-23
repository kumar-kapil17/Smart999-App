import React, { Component } from 'react';
import { View, Text,TouchableOpacity,Image,TextInput, Alert,ScrollView ,ToastAndroid} from 'react-native';
import FlagPicker from './FlagPicker'

export default class Mobile extends Component {


  showToast = () => {
    ToastAndroid.showWithGravityAndOffset(
      "feature will be added later",
      ToastAndroid.LONG,
      ToastAndroid.BOTTOM,
      25,
      100
    );
  };

       static navigationOptions = {
         headerShown: false
        }


  constructor(props) {
    super(props);
    this.state = {
      visible: false
    };
  }


   

  render() {
    return (
      <View style={{flex:1,backgroundColor:'white'}}>
        <View style={{flexDirection:'row',height:50,width:'100%',backgroundColor:'red'}}>
             <TouchableOpacity 
             onPress = {() => this.props.navigation.toggleDrawer()}
             style={{marginTop:10,marginLeft:10}}>
             <Image source={require('./Images/menu.png')} style={{height:30,width:30,tintColor:'white',marginLeft:0}} />
             </TouchableOpacity>
             <View style={{justifyContent:'center',alignItems:'center',marginLeft:85}}>
             <Text style={{color:'white',fontSize:25,textAlign:'center'}}>Smart999</Text>
             </View>
         </View>
      
   <ScrollView>
         <TouchableOpacity
          onPress = {() => this.props.navigation.navigate('Home')}
          style={{height:30,width:50,marginTop:20,marginLeft:10,justifyContent:'center',alignItems:'center'}}>
             <Image source = {require('./Images/black.png')} style={{height:20,width:30,tintColor:'red'}} />
          
         </TouchableOpacity>




         <View style={{height:150,width:'100%',marginTop:0,justifyContent:'center',alignItems:'center'}}>
             <Image source = {require('./Images/emergency.png')} style={{height:100,width:100,tintColor:'gray'}} />
         </View>

         <Text style={{fontSize:18,color:'#454545',marginTop:10,marginLeft:20}}>In case of emergency mobile number </Text>
         
      <View style={{flexDirection:'row',height:40,width:'60%',marginTop:40,justifyContent:'flex-start',alignSelf:'flex-start'}}>
         
         <View style={{height:50,width:100,marginLeft:0}}>
            <FlagPicker />
        </View>
         
         
         <TextInput
                   style={{ height: 40,width:'90%', borderColor: 'gray', borderBottomWidth: 1,fontSize:15,marginLeft:50 }}
                   placeholder="Mobile No.1 *"
                   keyboardType = 'phone-pad'
                   maxLength = {10}
                 
                />
         </View>

         <View style={{flexDirection:'row',height:40,width:'60%',marginTop:40,justifyContent:'flex-start',alignSelf:'flex-start'}}>
         
         <View style={{height:50,width:100,marginLeft:0}}>
            <FlagPicker />
        </View>
         
         
         <TextInput
                   style={{ height: 40,width:'90%', borderColor: 'gray', borderBottomWidth: 1,fontSize:15,marginLeft:50 }}
                   placeholder="Mobile No.2 *"
                   keyboardType = 'phone-pad'
                   maxLength = {10}
                 
                />
         </View>

         <TouchableOpacity
        //  onPress = {() => Alert.alert('Feature will be added later')}
        // onPress={() => showToastWithGravityAndOffset()}
           onPress={this.showToast}
          style={{height:40,width:130,marginTop:10,justifyContent:'center',alignItems:'flex-end',alignSelf:'flex-end',marginRight:20}}>
             <Text style={{fontSize:15,marginRight:20}}> + Add More</Text>
         </TouchableOpacity>

        

        



         <TouchableOpacity
           onPress = {() => this.props.navigation.navigate('HeightScreen') }
           style={{height:50,width:250,marginTop:50,backgroundColor:'red',justifyContent:'center',alignItems:'center',alignSelf:'center',borderRadius:5}} >
            <Text style={{color:'white',fontSize:20}}>Next</Text>
          </TouchableOpacity>

        <View style={{height:50,width:'100%'}}>

        </View>
       


         
    </ScrollView>
      </View>
    );
  }
}
