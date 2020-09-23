import React, { Component } from 'react';
import { View, Text,Image,ImageBackground,ScrollView,TextInput,TouchableOpacity } from 'react-native';
import Country from './Country';

export default class Main extends Component {

  static navigationOptions = {
    drawerLockMode: 'locked-closed',
}


  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={{flex:1,backgroundColor:'white'}}>
        
              <View               
                    style={{ height : 220,
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

         





         <Text style={{marginTop:20,textAlign:'center',}}>Please add your mobile number</Text>


         <View style={{height:100,width:'100%'}}>

              <Country />

              <View style={{height:40,width:150,marginTop:-80,marginLeft:110}}>

              <TextInput
                   style={{ height: 40, borderColor: 'gray', borderBottomWidth: 1 }}
                   placeholder="9878987898"
                   keyboardType = 'phone-pad'
                   maxLength = {10}
                 
                />

              </View>

         </View>


         <TouchableOpacity
         onPress = {() => this.props.navigation.navigate('Verification')}
          style={{height:50,width:100,backgroundColor:'red',justifyContent:'center',alignItems:'center',alignSelf:'center',marginTop:40,borderRadius:0,
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 12,
            },
            shadowOpacity: 0.58,
            shadowRadius: 16.00,
            
            elevation: 24,}}>
           <Text style={{color:'white'}}>Continue</Text>
         </TouchableOpacity>

                      
        
      </View>
    );
  }
}
