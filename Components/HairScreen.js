import React, { Component } from 'react';
import { View, Text,Image,TouchableOpacity,ScrollView,TextInput } from 'react-native';
import RadioForm, {
  RadioButton, 
  RadioButtonInput, 
  RadioButtonLabel
} from 'react-native-simple-radio-button';
import ColorPick from './ColorPick';

var hobbies = [
  {label: "", value: 0},
  {label: "", value: 1},
  // {label: "Soaking in the mud", value: 2},
];

export default class HairScreen extends Component {

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
          onPress = {() => this.props.navigation.navigate('WeightScreen')}
          style={{height:30,width:50,marginTop:20,marginLeft:10,justifyContent:'center',alignItems:'center'}}>
             <Image source = {require('./Images/black.png')} style={{height:20,width:30,tintColor:'red'}} />
          
         </TouchableOpacity>

         <View style={{height:150,width:'100%',marginTop:0,justifyContent:'center',alignItems:'center'}}>
             <Image source = {require('./Images/hair.png')} style={{height:100,width:100,tintColor:'gray'}} />
         </View>

         <View style={{flexDirection:'row',height:30,width:'100%',justifyContent:'flex-start',alignItems:'center'}}>
          <Text style={{marginLeft:20,fontSize:18}}>Hair Color </Text>
        </View> 


        <View style={{flexDirection:'row',height:210,width:'100%',justifyContent:'flex-start',alignItems:'flex-start'}}>

            <RadioForm
            radio_props={hobbies}
            initial={-1}
            onPress={(value) => {}}
            buttonSize={10}
            buttonOuterSize={20}
            buttonColor={'gray'}
            selectedButtonColor={'black'}
            // selectedLabelColor={'green'}
            labelStyle={{ fontSize: 20,paddingTop:130 }}
            disabled={false}
            formHorizontal={false}
            animation={true}
            style={{marginTop:20,width:30,height:250,marginLeft:20}}
            
            />
           
           <View style={{flexDirection:'column',width:'100%'}}>


            <View style={{height:80,width:'90%',marginTop:50}}>
              <ColorPick />
            </View>


            <View style={{height:30,width:180,marginTop:50,marginLeft:0}}>
                <Text style={{fontSize:20,marginTop:0}}>Others</Text>
            </View>

           </View>
           

        </View>

        <View style={{justifyContent:'flex-start',height:60,width:'100%',marginTop:40,}}>
          
                <TextInput
                   style={{ height: 50, width:'90%',alignSelf:'flex-start',fontSize:20,marginLeft:20,borderBottomWidth:1 }}
                   placeholder="Please specify"
                   placeholderTextColor = 'black'
                   keyboardType = 'default'
                   maxLength = {5}
                 
                />
        </View>



         <TouchableOpacity
           onPress = {() => this.props.navigation.navigate('EyeScreen') }
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
