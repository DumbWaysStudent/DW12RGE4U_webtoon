import React from 'react';
import { Text } from 'react-native';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';

import ForYou from './../screen/ForYou';
import Favorite from './../screen/Favorite';
import Profile from './../screen/Profile';

export default createMaterialBottomTabNavigator({
  ForYou: { 
    screen: ForYou,
    navigationOptions: {
      tabBarLabel: <Text style={{ fontSize: 14, fontWeight: 'bold' }}> For You</Text>,
      tabBarIcon: ({ tintColor }) => (
        <Icon name='th-large' size={26} color={tintColor} />
      )
    }
   },
  Favorite: { 
    screen: Favorite,
    navigationOptions: {
      tabBarLabel: <Text style={{ fontSize: 15, fontWeight: 'bold' }}> Favorite</Text>,
      tabBarIcon: ({ tintColor }) => (
        <Icon name='star' size={26} color={tintColor} />
      )
    }
   },
  Profile: { 
    screen: Profile,
    navigationOptions: {
      tabBarLabel: <Text style={{ fontSize: 15, fontWeight: 'bold' }}> Profile</Text>,
      tabBarIcon: ({ tintColor }) => (
        <Icon name='user' size={26} color={tintColor} />
      )
    }
   }
},
{
  initialRouteName: 'ForYou',
  activeColor: '#fb9224',
  inactiveColor: 'silver',
  barStyle: { backgroundColor: '#ffffff', paddingBottom: 5, },
});
