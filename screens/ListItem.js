import React from "react";
import { View, Text, Image, TouchableOpacity, ScrollView, FlatList, ImageBackground } from 'react-native'
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CustomSwitch from "../components/CustomSwitch";
import { useState } from "react";






export default function ListItem() {
    
    const items = ([
        { id: 1, image: require('../assets/evil.jpg'), title: "Evil Eye", author: "Etaf Rum" },
        { id: 2, image: require('../assets/yellow.jpg'), title: "Yellowface", author: "R. F. Kuang" },
        {id: 3, image: require('../assets/babes.jpg'), title: "Old Babes in the Woods", author: "Margret Atwood"}
    ])

    const renderItem = ({ item }) => (
        <View style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: 20
        }}>
        <View style={{ flexDirection: 'row', alignItems: 'center', flex: 1 }}>
                <Image source={item.image} style={{ width: 55, height: 55, borderRadius: 10, marginLeft: 5 }} />
                <View>
                <Text style={{
                        color: 'black',
                        fontSize: 14
                    }}>{item.title}</Text>
                <Text style={{
                        color: 'black',
                        fontSize: 14
                    }}>{item.author}</Text>
                    </View>
            </View>
            <TouchableOpacity style={{
                backgroundColor: 'orange',
                width: 100,
                height: 30,
                pading: 10,
                borderRadius: 20,
            }} >
                <Text style={{
                    color: 'white',
                    fontSize: 14,
                    textAlign: 'center',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>See</Text>
            </TouchableOpacity>
        </View>
      );
    
      return (
        <View>
          
          <FlatList
            data={items}
            renderItem={renderItem}
            keyExtractor={(item) => item.id.toString()}
          />
          
        </View>
      );
    };


   


