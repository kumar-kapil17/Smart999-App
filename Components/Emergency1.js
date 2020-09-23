import React, { Component } from 'react';
import { View, Text,TouchableOpacity,Image, Alert,Modal,StyleSheet,ToastAndroid,ScrollView } from 'react-native';
import SendSMS from 'react-native-sms-multi-sim';
import Radio2 from './Radio2';

export default class Emergency1 extends Component {

    static navigationOptions = {
        headerShown: false
       }

  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false
    };
  }

  setModalVisible = (visible) => {
    this.setState({ modalVisible: visible });
  }


  sendSMSFunction() {
    let SIM1 = 0
    let SIM2 = 1
    SendSMS.send(123, "+95912345678", "Hey.., this is me!\nGood to see you.",
      (msg)=>{
        ToastAndroid.show(msg, ToastAndroid.SHORT);
      }
    );
  }

  render() {
    const { modalVisible } = this.state;
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

         <View style={{height:160,width:'100%',alignItems:'flex-start'}}>
           
           <Text style={{color:'red',fontSize:25,marginTop:10,marginLeft:15}}>Ambulance</Text>
           <Text style={{color:'red',fontSize:25,marginTop:5,marginLeft:15}}>Police</Text>
           <Text style={{color:'red',fontSize:25,marginTop:5,marginLeft:15}}>Fire Brigade</Text>

         </View>

         <View style={{height:180,width:'100%',justifyContent:'center',alignItems:'center',marginTop:30}}>
             <TouchableOpacity 
            //  onPress = {() => this.props.navigation.navigate('EmeService')}
            // onPress = {() => Alert.alert('You can send the sms to ICE numbers')}
            onPress={() => {
              this.setModalVisible(true);
             }}
             >
             <Image source={require('./Images/click.gif')} style={{height:150,width:200}} />
             </TouchableOpacity>
         </View>

         {/* <Text style={{fontSize:20,textAlign:'center',marginTop:120}}>Click on EMERGENCY button to select</Text> */}
         
         <Text style={{fontSize:20,textAlign:'center',marginTop:90}}>
              Click on
            <Text style={{color:'red'}}> EMERGENCY</Text>
            <Text> button to send</Text>
         </Text>
        
        
         <Text style={{fontSize:20,textAlign:'center'}}>location details to selected service &</Text>
         <Text style={{fontSize:20,textAlign:'center'}}>emergency contacts .</Text>



         <View style={styles.centeredView}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={this.state.modalVisible}
          onRequestClose={() => {this.setModalVisible(false)}}
          // onRequestClose={() => {
          //   Alert.alert("Modal has been closed.");
          //   // modalVisible = false;
          // }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={{color:'gray'}}>Select SIM to send message to ICE contacts</Text>

              <View style={{height:30,width:'100%',marginTop:10}}>
                <Radio2 />
              </View>

              <View style={{width:'100%',height:'auto',flexDirection:'row',justifyContent:'space-around'}}>

                <View style={{flexDirection:'column',height:85,width:60,justifyContent:'center',alignItems:'center'}}>
                   <Image source ={require('./Images/si.png')} style={{height:60,width:50,}} />
                  <Text style={{fontSize:18,color:'red'}}>SIM1</Text>
                </View>
               

                <View style={{flexDirection:'column',height:85,width:60,justifyContent:'center',alignItems:'center'}}>
                  <Image source ={require('./Images/si.png')} style={{height:60,width:50,}} />
                  <Text style={{fontSize:18,color:'red'}}>SIM2</Text>
                </View>

            


              </View>

               {/* <Text style={{color:'white',fontSize:18,marginLeft:20}}>Your information has been uploaded successfully.This app is in demo mode,we will contact you when the app is live.</Text> */}

              <TouchableOpacity
                // style={{ ...styles.openButton, backgroundColor: "white" }}
                // onPress= {() => this.props.navigation.navigate('Emergency')}
                onPress={this.sendSMSFunction.bind(this)}
              >
                  <View style={{height:50,width:85,backgroundColor:'red',justifyContent:'center',alignItems:'center',marginTop:10}}>
                   <Text style={{color:'white',fontSize:15}}>SEND SMS</Text>
                </View>
                
              </TouchableOpacity>
            </View>
          </View>
        </Modal>

        {/* <TouchableHighlight
          style={styles.openButton}
          onPress={() => {
            this.setModalVisible(true);
          }}
        >
          <Text style={styles.textStyle}>Show Modal</Text>
        </TouchableHighlight> */}
      </View>

      <View style={{height:30,width:'100%'}}>

      </View>

    </ScrollView>


      </View>
    );
  }
}



const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
      width:'100%',
      height:250,
    // margin: 20,
    backgroundColor: "white",
    // borderRadius: 20,
    padding: 15,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  openButton: {
    backgroundColor: "#F194FF",
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  textStyle: {
    color: "gray",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
    color: 'gray',
    fontSize:20,
  }
});
