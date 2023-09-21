import { StyleSheet } from "react-native";
export const stylesSearch = StyleSheet.create({
  backgroundImage: {
    flex: 1, // Asegura que la imagen ocupe todo el espacio disponible
    resizeMode: "cover", // Ajusta la imagen para que cubra todo el componente
  },
  container: {
    flex: 1,
    // backgroundColor: "#fff",
    alignItems: "center",
    padding: 20, // Agrega margen alrededor del contenido
    justifyContent: "center",
    margin: 20,
  },
  formulario: {
    backgroundColor: "rgba(0, 0, 0, 0.4)", // Negro con un 50% de transparencia
    color: "white", // Hace que el texto sea blanco
    borderRadius: 10,
  },
  textoBlanco: {
    paddingHorizontal: 10,
    color: "white", // Establece el color blanco para todos los elementos de texto
    fontSize:25
  },

  input: {
    backgroundColor: "#000000",
    paddingHorizontal: 10,
    width: 250,
    height: 60,
    marginVertical: 10,
    color: "white",
    borderRadius: 10,
    fontSize:20
  },
  botoncito: {
    borderRadius: 10,
    width:250,
    
  },
});
