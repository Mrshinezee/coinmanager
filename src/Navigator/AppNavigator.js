import React from "react";
import { createStackNavigator, createAppContainer } from "react-navigation";
import Login from '../components/login/Login'


const AppNavigator = createStackNavigator(
    {
      Home: Login,
    },
    {
      initialRouteName: "Home"
    }
  );

  export default createAppContainer(AppNavigator);
