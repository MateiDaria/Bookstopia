import React from "react";
import { View, Text,ScrollView, Button  } from "react-native";
import { SafeAreaView } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Image } from "react-native";
import { TouchableOpacity } from "react-native";
import {  useNavigation } from '@react-navigation/native';
import Login from "./Login";




const bookImg = require('../assets/bookImg.jpg')



export default function MainScreen(navigate) {
    const navigation = useNavigation();
    
    ///const handleNavigateToHome = () => {
      //  navigation.navigate('HomeScreen');
      //};
    return (
        <SafeAreaView>
        <View >
        
                <Image source={bookImg} style={{ width: "100%", height: 840,position: "absolute", top: 0,resizeMode: 'cover',}} /> 
                <Text style={{ alignSelf: 'center', fontWeight: 'bold', fontSize: 40 }}>Bookstopia</Text>
            </View>
            <View style={{ top: 650}}>
                <TouchableOpacity onPress={()=> navigation.navigate(Login)} style={{ backgroundColor: '#f57c00', height: 50, borderRadius: 10, flexDirection: 'row', justifyContent: 'center', width: '70%', marginLeft: 40 }}>
                    <Text style={{justifyContent:'center', fontWeight: 'bold', fontSize: 25, color: 'white'}}>
                        Let's start
                    </Text>
                </TouchableOpacity>
                    
                
            </View>

            </SafeAreaView>
    )
}



