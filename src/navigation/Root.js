import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import React from 'react';
import { TouchableOpacity, Share } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Login from './../screen/Login';
import TabNavigation from '../navigation/TabNavigation';

import Detail from '../screen/Details';
import DetailEp from '../screen/DetailEpisode';
import EditProfile from '../screen/EditProfile';
import MyWebtoon from '../screen/MyWebtoon';
import AddWebtoon from '../screen/AddWebtoon';
import AddWebtoonChap from '../screen/AddWebtoonChap';
import EditWebtoon from '../screen/EditWebtoon';
import EditWebtoonChap from '../screen/EditWebtoonChap';

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
  EditProfile: {
    screen: EditProfile,
    navigationOptions: () => ({
      header: null
    }),
  },
  AddWebtoon: {
    screen: AddWebtoon,
    navigationOptions: () => ({
      header: null
    }),
  }, 
  AddWebtoonChap: {
    screen: AddWebtoonChap,
    navigationOptions: () => ({
      header: null
    }),
  },
  EditWebtoon: {
    screen: EditWebtoon,
    navigationOptions: () => ({
      header: null
    }),
  },
  EditWebtoonChap: {
    screen: EditWebtoonChap,
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
  },
  DetailEp: {
    screen: DetailEp,
    navigationOptions: () => ({
      headerTitle: 'Chapter 1',
      headerRight: <TouchableOpacity style={{ paddingRight: 20 }} onPress={() => Share.share(shareOption)}>
        <Icon name='share-alt' size={25} /></TouchableOpacity>,
    })
  },
  MyWebtoon: {
    screen: MyWebtoon,
    navigationOptions: () => ({
      headerTitle: 'My Webtoon',
    })
  }
}, { initialRouteName: 'Home' });

export default createAppContainer(Root);
