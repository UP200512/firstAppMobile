import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  Image,
  ImageBackground,
  ActivityIndicator 
} from "react-native";
import { getWetherByName } from "./src/services/wether";
import { useEffect, useState } from "react";
import Details from "./src/components/Details";
import Header from "./src/components/Header";
import {stylesSearch} from "./src/styles/styleSearch.js"
// Componente View -> DIV HTML
// Componente Text -> p HTML

export default function App() {
  const [city, setCity] = useState("");
  const [wether, setWether] = useState();
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    if(error) {
        alert("There isn't any match!");
    }
  }, [wether])

  const onPressHanddle = async () => {
    if (city) {
      setLoading(true);
      try {
        const resp = await getWetherByName(city);
        const errorExist = Boolean(resp.error);
        setError(errorExist);
        setWether(resp);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    } else {
      alert("Please type a city");
    }
  };

  const handdleChangeText = (e) => {
    const regex = /^[a-zA-Z0-9\s]*$/;
    if (regex.test(e)) setCity(e);
  };

  return (
    <ImageBackground
      source={require("./assets/fondo.jpg")}
      style={stylesSearch.backgroundImage}
    >
      <Header />
      <View style={stylesSearch.container}>
        <View style={stylesSearch.formulario}>
          <Text style={stylesSearch.textoBlanco}>Write a City</Text>
          <TextInput
            autoCorrect={true}
            placeholder={"City"}
            style={stylesSearch.input}
            value={city}
            onChangeText={handdleChangeText}
          />
          <Button title="Search" onPress={onPressHanddle} style={stylesSearch.botoncito} />
        </View>
        {loading && <ActivityIndicator size={70} color="white" />}
        {!error && !loading && wether && <Details wether={wether} />}
      </View>
    </ImageBackground>
  );
}


