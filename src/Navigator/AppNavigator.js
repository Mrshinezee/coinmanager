import React from "react";
import { createStackNavigator, createAppContainer } from "react-navigation";
import LoginScreen from '../screens/login/Login';
import DashboardScreen from '../screens/dashboard/Dashboard';



const AppNavigator = createStackNavigator(
    {
      Home: LoginScreen,
      Dashboard: DashboardScreen
    },
    {
      initialRouteName: "Home"
    }
  );

  export default createAppContainer(AppNavigator);
