import React, {Component} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Dimensions,
  Image,
  TouchableOpacity,
  Alert,
  StatusBar,
  Linking,Share
} from 'react-native';
import {createDrawerNavigator, DrawerItems} from 'react-navigation-drawer';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import Main from './Components/Main';
import Home from './Components/Home';
import Calendar from './Components/Calendar';
import Radio from './Components/Radio';
import About from './Components/About'
import Mobile from './Components/Mobile';
import HeightScreen from './Components/HeightScreen';
import WeightScreen from './Components/WeightScreen';
import HairScreen from './Components/HairScreen';
import ColorPick from './Components/ColorPick';
import EyeScreen from './Components/EyeScreen';
import Select from './Components/Select';
import Allergy from './Components/Allergy';
import Verification from './Components/Verification';
import Splash from './Components/Splash';

import Emergency from './Components/Emergency';
import Profile from './Components/Profile';
import EmeService from './Components/EmeService';
import Emergency1 from './Components/Emergency1';
import Rate from './Components/Rate'
import Info from './Components/Info'





const Pro = createStackNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      headerShown: false,
    },
  },
  Mobile: {
    screen: Mobile,
  },

  HeightScreen: {
    screen: HeightScreen,
  },

  WeightScreen: {
    screen: WeightScreen,
  },
  HairScreen: {
    screen: HairScreen,
  },
  EyeScreen: {
    screen: EyeScreen,
  },
  Select: {
    screen: Select,
  },
  Allergy: {
    screen: Allergy,
  },
  Emergency: {
    screen: Emergency,
  },
  Profile: {
    screen: Profile,
    navigationOptions: {
      headerShown: false,
    },
  },
  Info: {
    screen: Info,
    navigationOptions: {
      headerShown: false,
    },
  },

  EmeService: {
    screen: EmeService,
  },
  Emergency1: {
    screen: Emergency1,
  },
});

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
    };
  }

  performTimeConsumingTask = async () => {
    return new Promise((resolve) =>
      setTimeout(() => {
        resolve('result');
      }, 5000),
    );
  };

  async componentDidMount() {
    // Preload data from an external API
    // Preload data using AsyncStorage
    const data = await this.performTimeConsumingTask();

    if (data !== null) {
      this.setState({isLoading: false});
    }
  }

  
  render() {
    if (this.state.isLoading) {
      return <Splash />;
    }
    return (
      <View style={{flex: 1, backgroundColor: 'white'}}>
        <MyApp />
      </View>
    );
  }
}

const CustomDrawerComponent = (props) => (

  
  <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
    <View
      style={{
        height: 180,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
      }}>
      <Image
        source={require('./Components/Images/logo-new.jpg')}
        style={{height: 120, width: 120}}
      />
      <Text style={{color: 'red', fontSize: 30}}>Smart999</Text>
      <Text style={{color: 'red', fontSize: 13}}>Every second counts</Text>
    </View>
    <View
      style={{
        width: '100%',
        alignSelf: 'center',
        borderWidth: 0.5,
        borderColor: 'gray',
        marginTop: 10,
      }}
    />

    <ScrollView>
      <DrawerItems {...props} />

      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity
        
          style={{height: 50}}>
          <Text style={{marginLeft: 55, top: 20,fontFamily:'sans-serif-light',fontSize:15}} onPress={() => props.navigation.navigate('Info')} >About App</Text>
          <Image
            source={require('./Components/Images/tap.png')}
            style={{height: 20, width: 20, tintColor: 'gray', marginLeft: 20}}
          />
        </TouchableOpacity>
      </View>

      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity
          style={{height: 50}}>
          <Text style={{marginLeft: 55, top: 20,fontFamily:'sans-serif-light',fontSize:15}} onPress={() => Linking.openURL('http://play.google.com')}>Rate the App</Text>
          <Image
            source={require('./Components/Images/star.png')}
            style={{height: 20, width: 20, tintColor: 'gray', marginLeft: 20}}
          />
        </TouchableOpacity>
      </View>

      <View>
        <TouchableOpacity  style={{height: 50}}>
          <Text style={{marginLeft: 55, top: 20,fontFamily:'sans-serif-light',fontSize:15}} onPress={onShare}>Share the App</Text>
          <Image
            source={require('./Components/Images/sr.png')}
            style={{height: 20, width: 20, tintColor: 'gray', marginLeft: 20}}
          />
        </TouchableOpacity>
      </View>

      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity
        
          style={{height: 50}}>
          <Text style={{marginLeft: 55, top: 20,fontFamily:'sans-serif-light',fontSize:15}} onPress={() => props.navigation.navigate('Main')} >Sign Out</Text>
          <Image
            source={require('./Components/Images/logout.png')}
            style={{height: 20, width: 20, tintColor: '#696969', marginLeft: 20}}
          />
        </TouchableOpacity>
      </View>
    </ScrollView>
  </SafeAreaView>
);


const onShare = async () => {
  try {
    const result = await Share.share({
      message:
        'React Native | A framework for building native apps using React',
    });

    if (result.action === Share.sharedAction) {
      if (result.activityType) {
        // shared with activity type of result.activityType
      } else {
        // shared
      }
    } else if (result.action === Share.dismissedAction) {
      // dismissed
    }
  } catch (error) {
    alert(error.message);
  }
};




const AppNavigator = createDrawerNavigator(
  {
    Home: {
      screen: Pro,
    },
    // About: {
    //   screen: About,
     
    // },
    // Rate: {
    //   screen: Rate,
    //   navigationOptions: {
    //     drawerLabel: 'Rate the App',
    //     drawerIcon: () => (
    //       <Image
    //         source={require('./Components/Images/star.png')}
    //         style={{width: 20, height: 20, tintColor: 'gray'}}
    //       />
    //     ),
    //   },
    // },
   
  },

  {
    contentComponent: CustomDrawerComponent,
    initialRouteName : 'Home',
  },
);

const SwitchNavigator = createSwitchNavigator(
  {
    Main: {
      screen: Main,
      navigationOptions: {
        headerShown: false,
      },
    },

    Verification: {
      screen: Verification,
      navigationOptions: {
        headerShown: false,
      },
    },
    Drawer: {
      screen: AppNavigator,
    },
  },
  {
    initialRouteName: 'Main',
  },
);

console.disableYellowBox = true;
const MyApp = createAppContainer(SwitchNavigator);
