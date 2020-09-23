import React, { Component } from 'react';
import { View, Text,TouchableOpacity,Image,ScrollView } from 'react-native';
import HeightSlide from './HeightSlide';
import HeightSlide1 from './HeightSlide1';
import HeightSlide2 from './HeightSlide2';
import HeightSlide3 from './HeightSlide3';

export default class HeightScreen extends Component {

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
          onPress = {() => this.props.navigation.navigate('Mobile')}
          style={{height:30,width:50,marginTop:20,marginLeft:10,justifyContent:'center',alignItems:'center'}}>
             <Image source = {require('./Images/black.png')} style={{height:20,width:30,tintColor:'red'}} />
          
         </TouchableOpacity>



         <View style={{height:150,width:'100%',marginTop:0,justifyContent:'center',alignItems:'center'}}>
             <Image source = {require('./Images/hei.png')} style={{height:100,width:100,tintColor:'gray'}} />
         </View>




        <View style={{flexDirection:'row',height:80,width:'100%',justifyContent:'flex-start',alignItems:'center'}}>

          <Text style={{marginLeft:20,fontSize:20}}>Height: </Text>
          {/* <Text style={{fontSize:18,marginLeft:20}} >Feet</Text>
          <Text style={{fontSize:18,marginLeft:20}} >Inches</Text> */}
        </View>


        <View style={{height:'auto',width:'100%',marginTop:20}}>
             <HeightSlide2 />
        </View>


        <View style={{height:'auto',width:'100%',marginTop:20}}>
             <HeightSlide1 />
        </View>


        <View style={{flexDirection:'row',height:80,width:'100%',justifyContent:'flex-start',alignItems:'center'}}>

        <Text style={{marginLeft:20,fontSize:20}}>Height in Cms: </Text>
       
        </View>


        <View style={{height:'auto',width:'100%',marginTop:20}}>
             <HeightSlide3 />
        </View>


        <TouchableOpacity
           onPress = {() => this.props.navigation.navigate('WeightScreen') }
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
