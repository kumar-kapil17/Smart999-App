import React, { Component } from 'react';
import { View, Text,TouchableOpacity,Image } from 'react-native';

export default class About extends Component {


  // static navigationOptions = {
  //   drawerLabel:'About App',
  //   drawerIcon: () => (
  //     <Image
  //       source={require('./Images/tap.png')}
  //       style={{width: 20, height: 20,tintColor:'gray' }}
  //     />
  //   )
  // };
    


  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={{flex:1,backgroundColor:'white'}}>
        <TouchableOpacity
          onPress = {() => this.props.navigation.navigate('Home')}
          style={{height:30,width:50,marginTop:20,marginLeft:10,justifyContent:'center',alignItems:'center'}}>
             <Image source = {require('./Images/black.png')} style={{height:20,width:30,tintColor:'red'}} />
          
         </TouchableOpacity>

         <View style={{height:200,width:200,justifyContent:'center',alignItems:'center',alignSelf:'center',marginTop:30}}>
            <Image source = {require('./Images/logo-new.jpg')} style={{height:190,width:190}}  />
         </View>

            <Text style={{fontSize:40,color:'red',textAlign:'center'}}>Smart999</Text>
            <Text style={{fontSize:18,color:'red',textAlign:'center'}}>Every second count</Text>
            <Text style={{fontWeight:'bold',textAlign:'center'}}>Version 1.6</Text>

            <Text style={{textAlign:'center',top:30,fontSize:14,color:'gray'}}>Simply hit the 'EMERGENCY BUTTON' and an alert
             will be sent out instantly to the necessary emergency departments with your exact location and your
              full medical history.Be better prepared for any emergency with Smart999 app.</Text>

      </View>
    );
  }
}
