import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Login from './views/Login';
import Register from './views/Register';

const AppNavigator = createStackNavigator({
  Login: {
    screen: Login,
  },
  Register: {
    screen: Register,
  },
});

export default createAppContainer(AppNavigator);
