import React, { Component } from 'react';
import { View, Text,TextInput,TouchableOpacity, Alert,ImageBackground } from 'react-native';

export default class Verification extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={{flex:1,backgroundColor:'white',}}>
        
        <View style={{ height : 220,
                    width : '100%',
                //    marginTop:-100,
                    justifyContent:'center',
                    alignItems:'center',
                    backgroundColor:'white',
                    shadowColor: "#000",
                    shadowOffset: {
                        width: 0,
                        height: 2,
                    },
                    shadowOpacity: 0.25,
                    shadowRadius: 3.84,
                    
                    elevation: 5,
                    borderBottomStartRadius:30,
                    borderBottomEndRadius:30
                    }} >

                     
                                 
                      <View style={{height:130,width:100,alignItems:'center'}}>
                        <ImageBackground source = {require('./Images/logo-new.jpg')} style={{height:120,width:60}} />
                     </View>
                        <Text style={{textAlign:'center',color:'red',fontSize:30}}>Smart999</Text>
                        <Text style={{textAlign:'center',color:'red'}}>Every second count</Text>       

         </View>
          


          <View style={{height:60,width:'100%',alignContent:'center',alignItems:"center",marginTop:50}}>
          <TextInput
                   style={{ height: 50, width:'40%',fontSize:18,fontFamily:'sans-serif-light',borderBottomWidth:1,textAlign:'center',}}
                   placeholder="Verification Code"
                   placeholderTextColor = 'gray'
                   keyboardType = 'numeric'
                   maxLength = {6}
                 
                />
          </View>


          <TouchableOpacity
           onPress = {() => this.props.navigation.navigate('Home')}
           style={{height:50,width:100,backgroundColor:'red',justifyContent:'center',alignItems:'center',alignSelf:'center',marginTop:50,borderRadius:0,
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 12,
            },
            shadowOpacity: 0.58,
            shadowRadius: 16.00,
            
            elevation: 24,}}>
           <Text style={{color:'white'}}>Sign In</Text>
         </TouchableOpacity>
       
      </View>
    );
  }
}
