import React, { Component } from 'react';
import { View, Text,TouchableOpacity,Image,ScrollView } from 'react-native';
import Grp from './Grp';
import Radio from './Radio';
import Radio1 from './Radio1';

export default class Select extends Component {

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
         </View>


<ScrollView>

         <TouchableOpacity
          onPress = {() => this.props.navigation.navigate('EyeScreen')}
          style={{height:30,width:50,marginTop:20,marginLeft:10,justifyContent:'center',alignItems:'center'}}>
             <Image source = {require('./Images/black.png')} style={{height:20,width:30,tintColor:'red'}} />
          
         </TouchableOpacity>

         <View style={{height:150,width:'100%',marginTop:0,justifyContent:'center',alignItems:'center'}}>
             <Image source = {require('./Images/filee.png')} style={{height:100,width:100,tintColor:'gray'}} />
         </View>

         <View style={{flexDirection:'row',height:30,width:'100%',justifyContent:'flex-start',alignItems:'center'}}>
          <Text style={{marginLeft:20,fontSize:18}}>Select Blood Group </Text>
        </View>
        

         <View>

          <Grp />

         </View>

         <View style={{flexDirection:'row',height:30,width:'100%',justifyContent:'flex-start',alignItems:'center',marginTop:10}}>
          <Text style={{marginLeft:20,fontSize:18}}>Are you an Organ Donor ? </Text>
        </View>

          <View>
            <Radio1 />
          </View>

          <View style={{flexDirection:'row',height:30,width:'100%',justifyContent:'flex-start',alignItems:'center',marginTop:5}}>
          <Text style={{marginLeft:20,fontSize:18}}>Do you have any Medical Condition ? </Text>
        </View>

          <View>
            <Radio1 />
          </View>


          <TouchableOpacity
           onPress = {() => this.props.navigation.navigate('Allergy') }
           style={{height:50,width:250,marginTop:30,backgroundColor:'red',justifyContent:'center',alignItems:'center',alignSelf:'center',borderRadius:5}} >
            <Text style={{color:'white',fontSize:20}}>Next</Text>
          </TouchableOpacity>

          <View style={{height:50,width:'100%'}}>

          </View>




         </ScrollView>
      </View>
    );
  }
}
