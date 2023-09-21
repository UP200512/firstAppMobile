import { StyleSheet, Text, View, TextInput, Button, Image } from "react-native";

export default function Details({ wether }) {
  return (
    <View style={styles.contenedor}>
      <View style={styles.minicontenedor}>
        <Text style={styles.datos} >Contry: {wether.location.country}</Text>
        <Text style={styles.datos}>Region: {wether.location.region}</Text>
        <Text style={styles.datos}>City: {wether.location.name}</Text>
        <Text style={styles.datos}>Temp: {wether.current.temp_c}</Text>
        <Text style={styles.datos}>Condition: {wether.current.condition.text}</Text>
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
    </View>
  );
}

const styles = StyleSheet.create({
  contenedor: {
    backgroundColor: "rgba(0, 0, 0, 0.4)", // Negro con un 50% de transparencia
    color: "white", // Hace que el texto sea blanco
    borderRadius: 10,
    justifyContent: "center",
    marginVertical:20
  },
  minicontenedor: {
    justifyContent: "center",
  },
  datos: {
    color: "white",
    
  }
});
