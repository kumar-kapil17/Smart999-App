import React, { Component } from 'react';
import { View, Text,TouchableOpacity,Image,ScrollView } from 'react-native';
import RadioService from './RadioService';

export default class EmeService extends Component {

    static navigationOptions = {
        headerShown: false
       }

  constructor(props) {
    super(props);
    this.state = {
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

             <TouchableOpacity
             onPress = {() => this.props.navigation.navigate('Profile')}
              style={{height:35,width:35,justifyContent:'center',alignItems:'center',alignSelf:'center',marginLeft:80}}>
               <Image source = {require('./Images/prof.png')} style={{height:25,width:25,tintColor:'#e5e5e5'}} />
             </TouchableOpacity>

         </View>
       <ScrollView>  

         <View style={{height:160,width:'100%',justifyContent:'center',alignItems:'center'}}>
             <Image source = {require('./Images/emer.jpeg')} style={{height:150,width:120}} />
         </View>

         <Text style={{margin:15,fontSize:20}}>Select Emergency Service</Text>

         <View style={{flexDirection:'row',height:230,width:'90%',alignSelf:'center',}}>

             <RadioService />

             <View style={{flexDirection:'column',justifyContent:'space-around',height:220,width:'88%',}}>
                
                <View style={{height:30,width:250,marginTop:5}}>
                    <Text style={{fontSize:20}}>Ambulance Services</Text>
                </View>

                <View style={{height:30,width:250,}}>
                   <Text style={{fontSize:20}}>Police Station</Text>
                </View>

                <View style={{height:30,width:250,}}>
                    <Text style={{fontSize:20}}>Fire Brigade</Text>
                </View>

                <View style={{height:30,width:250,}}>
                   <Text style={{fontSize:20}}>All of the Above</Text>
                </View>


             </View>

         </View>

         <TouchableOpacity
           onPress = {() => this.props.navigation.navigate('Emergency1') }
           style={{height:50,width:250,marginTop:30,backgroundColor:'red',justifyContent:'center',alignItems:'center',alignSelf:'center',borderRadius:5}} >
            <Text style={{color:'white',fontSize:20}}>Next</Text>
          </TouchableOpacity>

          <View style={{height:30,width:'100%'}}>

         </View>

      </ScrollView>
      </View>
    );
  }
}
