import React from "react";
import { Text, View } from 'react-native'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

const API_KEY = "onteniente::stepzen.io+1000::be0bd732fe6f7deed24c1fc90540dce7697b340bbb848e9d5c947efeb83a532f";

const client = new ApolloClient({
  uri: "<https://onteniente.stepzen.net/api/iced-coral/__graphq>",
  headers: {
    Authorization: `Apikey ${API_KEY}`,
  },
  cache: new InMemoryCache(),
});


const Book = () => {
  return (
    <ApolloProvider>
    <View>
      <Text></Text>
    </View>
    </ApolloProvider>
  )
}

export default Book;