import React, { Component } from 'react';
import { View, Text,TouchableOpacity,Image, Alert,ScrollView } from 'react-native';

export default class Emergency extends Component {

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

         <View style={{height:160,width:'100%',alignItems:'center'}}>
           
           <Text style={{color:'red',fontSize:25,marginTop:10}}>In</Text>
           <Text style={{color:'red',fontSize:30,marginTop:10}}>Case of</Text>
           <Text style={{color:'red',fontSize:35,marginTop:10}}>Emergency</Text>

         </View>

         <View style={{height:180,width:'100%',sjustifyContent:'center',alignItems:'center',marginTop:30}}>
             <TouchableOpacity 
             onPress = {() => this.props.navigation.navigate('EmeService')}
             >
             <Image source={require('./Images/click.gif')} style={{height:150,width:200}} />
             </TouchableOpacity>
         </View>

         {/* <Text style={{fontSize:20,textAlign:'center',marginTop:120}}>Click on EMERGENCY button to select</Text> */}
         
         <Text style={{fontSize:20,textAlign:'center',marginTop:120}}>
              Click on
            <Text style={{color:'red'}}> EMERGENCY</Text>
            <Text> button to select</Text>
         </Text>
        
        
         <Text style={{fontSize:20,textAlign:'center'}}>service which you need .</Text>

         <View style={{height:30,width:'100%'}}>

         </View>




    </ScrollView>
      </View>
    );
  }
}
