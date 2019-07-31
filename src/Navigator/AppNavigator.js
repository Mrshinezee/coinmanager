import React from "react";
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { createSwitchNavigator,createStackNavigator, createAppContainer, createDrawerNavigator, createBottomTabNavigator, DrawerNavigator, StackNavigator, TabNavigator } from "react-navigation";
import LoginScreen from '../screens/login/Login';
import Dashboard from '../screens/dashboard/Dashboard';
import PurchaseScreen from '../screens/dashboard/PurchaseCoin';
import Signal from '../screens/signal/Signal';
import Transcations from '../screens/transcations/Transcations';
import Exchange from '../screens/exchange/Exchange';



const DashboardBottomNavigation = createBottomTabNavigator({
  Dashboard,
  Signal,
  Transcations,
  Exchange,
},{
  navigationOptions: ({navigation}) => {
    const {routeName} = navigation.state.routes[navigation.state.index];
    return {
      headerTitle: routeName
    }
  }
});

const DashboardStackNavigation = createStackNavigator({
  DashboardBottomNavigation: DashboardBottomNavigation
},{
  defaultNavigationOptions: ({navigation}) => {
    return {
      headerLeft: (
        <TouchableOpacity onPress={navigation.openDrawer}>
           <Icon name="md-menu" style={{ padding: 10 }} size={20} />
        </TouchableOpacity>
      ),
    }
  }
});

const Purchase = createStackNavigator({
  Purchase: {
    screen: PurchaseScreen,
  },
});
const Login = createStackNavigator({
  Login: {
    screen: LoginScreen,
  },
});

const AppDrawerNavigation = createDrawerNavigator({
  Dashboard: {
      screen: DashboardStackNavigation
  },
  Logout: {
    screen: Login
  },
});

const AppSwitchNavigator = createSwitchNavigator(
    {
      Home: Login,
      App: AppDrawerNavigation,
      Purchase,
    },
  );

  export default createAppContainer(AppSwitchNavigator);
