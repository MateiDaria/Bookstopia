import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import Login from './screens/Login';
import MainScreen from './screens/MainScreen'
import SignUp from './screens/SignUp';
import React from 'react';
import { useState, createContext, useContext, useEffect } from 'react';
import {  ActivityIndicator } from 'react-native';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from 'firebase/auth';
import firebase from 'firebase/app';
import useAuth from './hooks/useAuth';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Book from '../Bookstopia/screens/Book' 
import Favourite from './screens/Favourite';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import List from './screens/List'







  
const Tab = createBottomTabNavigator();


const Stack = createNativeStackNavigator();

export default function AppNavigation() {
  const { user } = useAuth();
  if (user) {
    return (
      
      <NavigationContainer>
        <Tab.Navigator initialRouteName='HomeScreen' screenOptions={{tabBarShowLabel: false, headerShown: false, tabBarStyle: {backgroundColor: 'orange'}, tabBarInactiveTintColor: 'white'}} >
          <Tab.Screen name="Welcome" component={HomeScreen} options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name='home' color={color} size={size}/>
            )
          }} 
          />
          <Tab.Screen name="Book" component={Book} options={{ 
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name='bookshelf' color={color} size={size} />
            )
          }}/>
          <Tab.Screen name="Fav" component={Favourite} options={{ 
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name='calendar-heart' color={color} size={size} />
            )
          }} />
  

          
        </Tab.Navigator>
        
        </NavigationContainer>
        
    )
    
  }
  else {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName='MainScreen'>
        <Stack.Screen name="hello" options={{ headerShown: false }} component={MainScreen} />
          <Stack.Screen name="Login" options={{ headerShown: false }} component={Login} />
          <Stack.Screen name="SignUp" options={{ headerShown: false }} component={SignUp} />
          
          
         
          
        </Stack.Navigator>
      </NavigationContainer>
    )
        
  }
  
  
}