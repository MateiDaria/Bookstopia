import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View, Text } from 'react-native'
import Login from "../screens/Login";
import SignUp from '../screens/SignUp'
import MainScreen from '../screens/MainScreen';
import useAuth from "../hooks/useAuth";
import HomeScreen from "../screens/HomeScreen";

const Stack = createNativeStackNavigator();
export default function AppNavigation() {
  const { user } = useAuth();
  if (user) {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName='MainScreen'>
          <Stack.Screen name="Welcome" options={{ headerShown: false }} component={MainScreen} />
          <Stack.Screen name="hello" options={{ headerShown: false }} component={HomeScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    )
  }
  else {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName='MainScreen'>
          <Stack.Screen name="Welcome" options={{ headerShown: false }} component={MainScreen} />
          <Stack.Screen name="Login" options={{ headerShown: false }} component={Login} />
          <Stack.Screen name="SignUp" options={{ headerShown: false }} component={SignUp} />
          <Stack.Screen name="Welcome" options={{ headerShown: false }} component={HomeScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    )
  }
}