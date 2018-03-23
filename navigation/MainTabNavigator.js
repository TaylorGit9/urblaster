import React from 'react';
import { Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { TabNavigator, TabBarBottom } from 'react-navigation';

import Colors from '../constants/Colors';

/*
import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';
*/
import SettingsScreen from '../screens/SettingsScreen';
import ProfileScreen from '../screens/ProfileScreen';
import DiscoverScreen from '../screens/DiscoverScreen';

export default TabNavigator(
  {
    Profile:{
      screen:ProfileScreen,
    },
    Discover:{
      screen:DiscoverScreen,
    },
    /*
    Home: {
      screen: HomeScreen,
    },
    Links: {
      screen: LinksScreen,
    },
    */
    Settings: {
      screen: SettingsScreen,
    },
    
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused }) => {
        const { routeName } = navigation.state;
        let iconName;
        switch (routeName) {
          case 'Profile' :
            iconName =
            Platform.OS === 'ios'
              ? `ios-person${focused ? '' : '-outline'}`
              : 'md-person';
            break;
          case 'Discover' :
            iconName =
            Platform.OS === 'ios'
              ? `ios-planet${focused ? '' : '-outline'}`
              : 'md-planet';
            /*
              ? `ios-globe${focused ? '' : '-outline'}`
              : 'md-globe';
              */
            break;
            /*
          case 'Home':
            iconName =
              Platform.OS === 'ios'
                ? `ios-information-circle${focused ? '' : '-outline'}`
                : 'md-information-circle';
            break;
          case 'Links':
            iconName = Platform.OS === 'ios' ? `ios-link${focused ? '' : '-outline'}` : 'md-link';
            break;
            */
          case 'Settings':
            iconName =
              Platform.OS === 'ios' ? `ios-options${focused ? '' : '-outline'}` : 'md-options';
              
        }
        return (
          <Ionicons
            name={iconName}
            size={28}
            style={{ marginBottom: -3 }}
            color={focused ? Colors.tabIconSelected : Colors.tabIconDefault}
          />
        );
      },
    }),
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    animationEnabled: false,
    swipeEnabled: false,
  }
);
