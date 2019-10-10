import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import React from 'react';
import { TouchableOpacity, Share } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import Login from './../screen/Login';
import TabNavigation from '../navigation/TabNavigation';
import Detail from '../screen/Details';

const shareOption = {
  message: 'Link youtube gan',
};

const Root = createStackNavigator({
  Login: {
    screen: Login,
    navigationOptions: () => ({
      header: null
    }),
  },
  Home: {
    screen: TabNavigation,
    navigationOptions: () => ({
      header: null
    }),
  },
  Detail: {
    screen: Detail,
    navigationOptions: () => ({
      headerTitle: 'Kimetsu No Yaiba',
      headerRight: <TouchableOpacity style={{ paddingRight: 15 }} onPress={() => Share.share(shareOption)}>
      <Icon name='share-alt' size={25} /></TouchableOpacity>,
    })
  }
}, { initialRouteName: 'Login' });

export default createAppContainer(Root);
