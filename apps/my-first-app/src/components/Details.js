import { StyleSheet, Text, View, TextInput, Button, Image } from "react-native";

import { useState } from "react";

export default function Details({wether}) {
    return( <View>
    <View style={{ marginTop: 20 }}>
      <Text>Contry: {wether.location.country}</Text>
      <Text>Region: {wether.location.region}</Text>
      <Text>City: {wether.location.name}</Text>
      <Text>Temp: {wether.current.temp_c}</Text>
      <Text>Condition: {wether.current.condition.text}</Text>
    </View>
    <Image
      style={{
        width: 64,
        height: 64,
      }}
      source={{
        uri: "https:" + wether.current.condition.icon,
      }}
    />
  </View>)
 
}
