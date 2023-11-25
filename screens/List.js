import React from "react";
import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native'
import { useNavigation } from "@react-navigation/native";



export default function List() {
    const navigation = useNavigation();

    const items = ([
        {id: 1, image: require('../assets/when.webp'), title: "When the hibiscus falls", author: "M. Evelina Glang", description: "Daughters, sisters, mothers, aunties, cousins, and lolas commune with their ancestors and their descendants, mourning what is lost when an older generation dies, celebrating what is gained when we safeguard their legacy for those who come after us."}
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
}