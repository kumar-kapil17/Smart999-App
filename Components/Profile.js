import React, { Component } from 'react';
import { View, Text,TouchableOpacity,Image,ScrollView, Alert,StyleSheet, ToastAndroid, } from 'react-native';
import PickerImage from './PickerImage';


// export default class Profile extends Component {
    const Profile = ({navigation}) => {

//     static navigationOptions = {
//         headerShown: false
//        }

//   constructor(props) {
//     super(props);
//     this.state = {
//     };
//   }


   const showToastWithGravityAndOffset = () => {
    ToastAndroid.showWithGravityAndOffset(
      "Feature will be added soon",
      ToastAndroid.SHORT,
      ToastAndroid.CENTER,
      25,
      50
    );
  };

//   render() {
    return (
      <View style={{flex:1,backgroundColor:'white'}}>

        <View style={{flexDirection:'row',height:50,width:'100%',backgroundColor:'red'}}>
             <TouchableOpacity 
            //  onPress = {() => this.props.navigation.toggleDrawer()}

            onPress = {() => navigation.navigate('Emergency')}
             style={{marginTop:10,marginLeft:10}}>
             <Image source={require('./Images/black.png')} style={{height:20,width:20,tintColor:'white',top:5}} />
             </TouchableOpacity>
             <View style={{justifyContent:'center',alignItems:'center',marginLeft:50}}>
             <Text style={{color:'white',fontSize:20,textAlign:'left'}}>Profile</Text>
             </View>
         </View>

<ScrollView>

         <View style={{height:200,width:'100%',justifyContent:'center',alignItems:'center'}}>

            <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center',height:140,width:'100%',}}>

                <View style={{height:110,width:110,marginTop:10,justifyContent:'center',alignItems:'center',alignSelf:'center'}}> 
                <PickerImage />
                
                <View style={{height:30,width:30,marginTop:0,marginLeft:50}}>
                    <Image source = {require('./Images/camera.png')} style={{height:30,width:30,marginTop:-10}} />
                </View>

                </View>  
           </View>
           <Text style={{fontSize:25,textAlign:'center'}}>Jordan Ramsay</Text>
             
         </View>
         
    {/* <View style={styles.container}>
     
      <Button
        title="Toggle Toast With Gravity & Offset"
        onPress={() => showToastWithGravityAndOffset()}
      />
    </View> */}

         <TouchableOpacity 

         onPress={() => showToastWithGravityAndOffset()}
        //  onPress = {() => this.props.navigation.navigate('AlertTos')}
        //   onPress = {() => Alert.alert('Feature will be added soon')}
          style={{backgroundColor:'white',height:60,width:'97%',alignSelf:'center',justifyContent:'center',marginTop:30,borderWidth:0,
               shadowColor: "white",
               shadowOffset: {
                   width: 0,
                   height: 4,
               },
               shadowOpacity: 0.30,
               shadowRadius: 4.65,
               
               elevation: 5,}}>

                   <Text style={{textAlign:'left',paddingLeft:20}}>8756985475</Text>

         </TouchableOpacity>








         <TouchableOpacity 
         onPress={() => showToastWithGravityAndOffset()}
         style={{backgroundColor:'white',height:60,width:'97%',alignSelf:'center',justifyContent:'center',marginTop:10,borderWidth:0,
               shadowColor: "white",
               shadowOffset: {
                   width: 0,
                   height: 4,
               },
               shadowOpacity: 0.30,
               shadowRadius: 4.65,
               
               elevation: 5,}}>

               <Text style={{textAlign:'left',paddingLeft:20}}>Change ICE Numbers</Text>

         </TouchableOpacity>

         <TouchableOpacity 
         onPress={() => showToastWithGravityAndOffset()}
         style={{backgroundColor:'white',height:60,width:'97%',alignSelf:'center',justifyContent:'center',marginTop:10,borderWidth:0,
               shadowColor: "white",
               shadowOffset: {
                   width: 0,
                   height: 4,
               },
               shadowOpacity: 0.30,
               shadowRadius: 4.65,
               
               elevation: 5,}}>

               <Text style={{textAlign:'left',paddingLeft:20}}>Change Medical Conditions</Text>

         </TouchableOpacity>

         <TouchableOpacity 
         onPress={() => showToastWithGravityAndOffset()}
         style={{backgroundColor:'white',height:60,width:'97%',alignSelf:'center',justifyContent:'center',marginTop:10,borderWidth:0,
               shadowColor: "white",
               shadowOffset: {
                   width: 0,
                   height: 4,
               },
               shadowOpacity: 0.30,
               shadowRadius: 4.65,
               
               elevation: 5,}}>

              <Text style={{textAlign:'left',paddingLeft:20}}>Change Personal Details</Text>

         </TouchableOpacity>


         <TouchableOpacity 
        //  onPress={() => showToastWithGravityAndOffset()}
        onPress ={() => navigation.navigate('Info')}
         style={{backgroundColor:'white',height:60,width:'97%',alignSelf:'center',justifyContent:'center',marginTop:10,borderWidth:0,
               shadowColor: "white",
               shadowOffset: {
                   width: 0,
                   height: 4,
               },
               shadowOpacity: 0.30,
               shadowRadius: 4.65,
               
               elevation: 5,}}>

              <Text style={{textAlign:'left',paddingLeft:20}}>App Info</Text>

         </TouchableOpacity>


         <TouchableOpacity 
        //  onPress={() => showToastWithGravityAndOffset()}
        onPress ={() => navigation.navigate('Main')}
         style={{backgroundColor:'white',height:60,width:'97%',alignSelf:'center',justifyContent:'center',marginTop:10,borderWidth:0,
               shadowColor: "white",
               shadowOffset: {
                   width: 0,
                   height: 4,
               },
               shadowOpacity: 0.30,
               shadowRadius: 4.65,
               
               elevation: 5,}}>

              <Text style={{textAlign:'left',paddingLeft:20}}>Sign Out</Text>

         </TouchableOpacity>






        {/* <TouchableOpacity
        // onPress = {() => this.props.navigation.navigate('AlertTos')}
           onPress = {() => navigation.navigate('Allergy') }
           style={{height:50,width:250,marginTop:30,backgroundColor:'red',justifyContent:'center',alignItems:'center',alignSelf:'center',borderRadius:5}} >
            <Text style={{color:'white',fontSize:20}}>Next</Text>
          </TouchableOpacity> */}

          <View style={{height:50,width:'100%'}}>

          </View>

</ScrollView>
      </View>
    );
//   }
}



const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      // paddingTop: Constants.statusBarHeight,
      paddingTop :10,
      backgroundColor: "#888888",
      padding: 8
    }
  });

  export default Profile;