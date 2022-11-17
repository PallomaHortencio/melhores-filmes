import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Button,
  Alert,
  Pressable,
} from "react-native";
import React, { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Ionicons } from "@expo/vector-icons";

const Favoritos = () => {
  const [listaFavoritos, setListaFavoritos] = useState([]);

  useEffect(() => {
    async function carregarFavoritos() {
      try {
        const dados = await AsyncStorage.getItem("@favoritos");
        const filmes = JSON.parse(dados);
        if (dados != null) {
          setListaFavoritos(filmes);
        }
        console.log(dados);
      } catch (error) {
        console.log("Deu ruim no carregamento: " + error.message);
      }
    }
    carregarFavoritos();
  }, []);

  const excluirFavoritos = async () => {
    await AsyncStorage.removeItem("@favoritos");
    setListaFavoritos([]);
    Alert.alert("Favoritos", "Favoritos excluídos!");
  };

  return (
    <SafeAreaView style={estilos.safeContainer}>
      <View style={estilos.container}>
        <Text>Quantidade: {listaFavoritos.length}</Text>
        <Button title="Excluir favoritos" onPress={excluirFavoritos} />

        {listaFavoritos.map((filmeFavorito) => {
          return (
            <Pressable key={filmeFavorito.id} style={estilos.itemFilme}>
              <Text style={estilos.titulo}>{filmeFavorito.title}</Text>
              <Pressable style={estilos.botaoExluir}>
                <Ionicons name="trash" size={18} color="white" />
              </Pressable>
            </Pressable>
          );
        })}
      </View>
    </SafeAreaView>
  );
};

export default Favoritos;

const estilos = StyleSheet.create({
  safeContainer: {
    flex: 1,
  },
  container: {
    padding: 8,
    flex: 1,
  },
  itemFilme: {
    padding: 8,
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#ccc",
    marginVertical: 8,
    borderRadius: 4,
    alignItems: "center",
  },
  botaoExluir: {
    backgroundColor: "red",
    padding: 12,
    borderRadius: 4,
  },
  titulo: {
    fontSize: 12,
  },
});
