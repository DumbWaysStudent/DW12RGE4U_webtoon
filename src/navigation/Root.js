import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Login from './../screen/Login';
import Home from './../screen/Home';


const Root = createStackNavigator({
  Login: {
    screen: Login,
    navigationOptions: () => ({
      header: null
    }),
  },
  Home: {
    screen: Home,
    navigationOptions: () => ({
      header: null
    }),
  },

});

export default createAppContainer(Root);
