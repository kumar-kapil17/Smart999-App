import React from 'react';
import {
  Image,
  PixelRatio,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import ImagePicker from 'react-native-image-picker';

export default class PickerImage extends React.Component {
  state = {
    avatarSource: null,
   
  };

  constructor(props) {
    super(props);

    this.selectPhotoTapped = this.selectPhotoTapped.bind(this);
   
  }

  selectPhotoTapped=() =>{
    const options = {
      takePhotoButtonTitle: 'Take a photo',
      chooseFromLibraryButtonTitle: 'Choose from gallery',
      quality: 1.0,
      maxWidth: 500,
      maxHeight: 500,
      storageOptions: {
        skipBackup: true,
      },
    };

    ImagePicker.showImagePicker(options, (response) => {
        console.log('Response = ', response);
  
        if (response.didCancel) {
          console.log('User cancelled photo picker');
        } else if (response.error) {
          console.log('ImagePicker Error: ', response.error);
        } else if (response.customButton) {
          console.log('User tapped custom button: ', response.customButton);
        } else {
          let source = {uri: response.uri};
  
         
          this.setState({
            avatarSource: source,
          });
        }
      });
    }

  
  render() {
    return (
        

        <View style={styles.container}>
         
       

       <TouchableOpacity 
        onPress={this.selectPhotoTapped.bind(this)}>
        <View
            style={[styles.avatar, styles.avatarContainer, {marginBottom: 20}]}>
            {this.state.avatarSource === null ? (
              <View>
              
              
              {/* <Text style={{textAlign:'center'}}>Click to add your photo</Text> */}
              <Image source ={require('./Images/avtar1.jpg')} style={{height:100,width:100,borderRadius:75}} />
              </View>
            ) : (
              <Image style={styles.avatar} source={this.state.avatarSource} />
            )}
          </View>
         
        </TouchableOpacity>

       

       
      </View>
     
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  avatarContainer: {
    borderColor: '#9B9B9B',
    borderWidth: 1 / PixelRatio.get(),
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  avatar: {
    borderRadius: 75,
    width: 100,
    height: 100,
  },
});