import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
  Button,
  Alert,
} from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const FormBusca = () => {
  const [text, onChangeText] = React.useState("");
  return (
    <SafeAreaView>
      <Text style={estilos.texto}>
        Pegue sua pipoca e faça uma seção cinema em casa
        <MaterialCommunityIcons name="popcorn" size={16} color="black" />
      </Text>
      <Text style={estilos.texto}>
        Localize um filme que você gostaria de ver
      </Text>
      <View style={estilos.filme}>
        <Ionicons name="film" size={24} color="black" />
        <TextInput
          style={estilos.caixa}
          onChangeText={onChangeText}
          value={text}
          placeholder="Filmes"
        />
      </View>
      <Button
        style={estilos.botao}
        title="Procurar"
        color="#5451a6"
        onPress={() => Alert.alert("oi")}
      />
    </SafeAreaView>
  );
};

export default FormBusca;

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  caixa: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    width: "90%",
  },
  texto: {
    marginVertical: 6,
    margin: 5,
    paddingVertical: 8,
  },
  filme: {
    flexDirection: "row",
    alignItems: "center",
    margin: 6,
  },
});
