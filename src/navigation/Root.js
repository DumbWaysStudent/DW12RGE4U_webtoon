import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Login from './../screen/Login';
import TabNavigation from '../navigation/TabNavigation';


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

});

export default createAppContainer(Root);
