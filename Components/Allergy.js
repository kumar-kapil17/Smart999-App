import React, { Component } from 'react';
import { View, Text,TouchableOpacity,Image,ScrollView,TextInput,Alert,
  Modal,
  StyleSheet,TouchableHighlight, } from 'react-native';
import MultiSelect from './MultiSelect';
import MultiSelect1 from './MultiSelect1';

export default class Allergy extends Component {

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
         </View>

<ScrollView>

         <TouchableOpacity
          onPress = {() => this.props.navigation.navigate('Select')}
          style={{height:30,width:50,marginTop:20,marginLeft:10,justifyContent:'center',alignItems:'center'}}>
             <Image source = {require('./Images/black.png')} style={{height:20,width:30,tintColor:'red'}} />
          
         </TouchableOpacity>

         <View style={{height:150,width:'100%',marginTop:0,justifyContent:'center',alignItems:'center'}}>
             <Image source = {require('./Images/sne.png')} style={{height:100,width:100,tintColor:'gray'}} />
         </View>

         <View style={{flexDirection:'row',height:30,width:'100%',justifyContent:'flex-start',alignItems:'center'}}>
          <Text style={{marginLeft:20,fontSize:18}}>Allergies </Text>
        </View>


        <View style={{flexDirection:'row',alignSelf:'center'}}>
          <View>
          <MultiSelect />
          </View>

          <View>
          <MultiSelect1 />
          </View>


        </View>
        
        <View style={{flexDirection:'row',height:30,width:'100%',justifyContent:'flex-start',alignItems:'center',marginTop:20}}>
          <Text style={{marginLeft:20,fontSize:18}}>Other </Text>
        </View>

        <View style={{justifyContent:'flex-start',height:60,width:'100%',marginTop:10,}}>
          
                <TextInput
                   style={{ height: 50, width:'90%',alignSelf:'flex-start',fontSize:20,marginLeft:20,borderBottomWidth:1 }}
                   placeholder="Please specify"
                   placeholderTextColor = 'black'
                   keyboardType = 'default'
                   maxLength = {5}
                 
                />
        </View>

        <TouchableOpacity
           onPress={() => {
             this.setModalVisible(true);
            }}
           style={{height:50,width:250,marginTop:30,backgroundColor:'red',justifyContent:'center',alignItems:'center',alignSelf:'center',borderRadius:5}} >
            <Text style={{color:'white',fontSize:20}}>Next</Text>
          </TouchableOpacity>

          <View style={{height:50,width:'100%'}}>

          </View>





          <View style={styles.centeredView}>
        <Modal
          animationType="slide"
          transparent={true}


          visible={this.state.modalVisible}
          onRequestClose={() => {this.setModalVisible(false)}}
          // visible={modalVisible}
          // onRequestClose={() => {
          //   Alert.alert("Modal has been closed.");
          // }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>Thank you</Text>

               <Text style={{color:'white',fontSize:18,marginLeft:20}}>Your information has been uploaded successfully.This app is in demo mode,we will contact you when the app is live.</Text>

              <TouchableOpacity
                // style={{ ...styles.openButton, backgroundColor: "white" }}
                onPress= {() => this.props.navigation.navigate('Emergency')}
              >
                  <View style={{height:50,width:90,backgroundColor:'white',justifyContent:'center',alignItems:'center',marginTop:10}}>
                   <Text style={{color:'red',fontSize:20}}>Ok</Text>
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
    backgroundColor: "red",
    // borderRadius: 20,
    padding: 35,
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
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
    color: 'white',
    fontSize:20,
  }
});
