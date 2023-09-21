import { StyleSheet, Text, View } from "react-native";

export default function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.mainTitle}>Wether App</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    marginVertical: 40,
    paddingTop: 20, // Espacio en la parte superior
    paddingHorizontal: 10,
    paddingBottom: 20, // Espacio en la parte inferior
    alignItems: "center", // Centra el contenido horizontalmente
    backgroundColor: "rgba(0, 0, 0, 0.4)", // Negro con un 50% de transparencia
  },
  mainTitle: {
    fontSize: 30, // <- Los pixeles son dependiendo del dispositivo
    color: "white",
  },
});
