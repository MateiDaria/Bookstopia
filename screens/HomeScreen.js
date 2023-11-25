import React, { useState } from "react";
import { View, Text, ScrollView, TextInput, TouchableOpacity } from "react-native";
import Login from "./Login";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaView } from "react-native-safe-area-context";
import EvilIcons from "@expo/vector-icons/EvilIcons";
import BookDetails from "./BookDetails";
import Carousel from "react-native-snap-carousel";
import {comingSoon, sliderData} from '../model/data'
import BannerSlider from "../components/BannerSlider";
import CustomSwitch from "../components/CustomSwitch";
import { theLatest } from "../model/data";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ListItem from "./ListItem";
import List from "./List";





const Tab = createBottomTabNavigator();

const Stack = createNativeStackNavigator();

export default function HomeScreen(navigation) {
    
    const [booksTab, setBooksTab] = useState(1);
    const renderBanner = ({ item, index }) => {
        return <BannerSlider data={item} />
    };
    const onSelectSwitch = value => {
        setBooksTab(value);
      };


    return (
  
        <ScrollView>

            <View>
            <Text style={{fontSize: 30, alignSelf: 'center', fontWeight: 'bold'}}>Home</Text>
            </View>
            <View style={{ flexDirection: 'row', borderColor: '#C6C6C6', borderRadius: 10, borderWidth: 2, paddingHorizontal: 3, paddingVertical: 5}} >
                <EvilIcons name="search" size={20}  style={{marginRight: 5}} />
                <TextInput placeholder="search"  />
            </View>
            <View style={{marginVertical: 5, flexDirection: 'row',justifyContent: 'space-between'}}>
                <Text style={{ fontSize: 25, fontWeight: 'bold', color: 'orange' }}>Upcoming Goodies</Text>
                <TouchableOpacity onPress={() => navigation.navigate(BookDetails)}>
                    <Text style={{fontSize:15, color: 'orange'}}>See all</Text>
                </TouchableOpacity>
            </View>
            <Carousel
                 ref={(c) => { this._carousel = c; }}
                 data={sliderData}
                 renderItem={renderBanner}
                 sliderWidth={400}
                 itemWidth={300}
                loop={true}
            />

            <View style={{marginVertical: 20}}>
                <CustomSwitch
                 selectionMode={1}
                 option1="The latest"
                 option2="Coming soon"
                 onSelectSwitch={onSelectSwitch}/>
            </View>
         

            {booksTab == 1 && <ListItem />      }
            {booksTab == 2 && <List/>}



    </ScrollView>
    )
}


