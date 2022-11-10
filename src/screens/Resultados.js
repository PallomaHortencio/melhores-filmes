import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const Resultados = ({ route }) => {
  /* Usamos a prop route (do react navigation) para acessar os parametros desta rota de navegação e extrair os dados (neste caso, filme) enviados para essa tela Resultados */
  const { filme } = route.params;

  return (
    <SafeAreaView style={estilos.container}>
      <Text>Você buscou por: {filme}</Text>
    </SafeAreaView>
  );
};

export default Resultados;

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
