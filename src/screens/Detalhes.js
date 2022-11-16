import {
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

/* Prop de route para acesso aos dados trafegados entre a navegação entre as telas/rotas */
const Detalhes = ({ route }) => {
  /* console.log(route); */

  /* Extraindo dos parametros da rota os dados do objeto filme */
  const { filme } = route.params;
  /*  console.log(filme); */
  return (
    <SafeAreaView style={estilos.safeContainer}>
      <View style={estilos.container}>
        <ImageBackground
          style={estilos.imagem}
          source={{
            uri: `https://image.tmdb.org/t/p/original/${filme.backdrop_path}`,
          }}
        >
          <Text style={estilos.titulo}>{filme.title}</Text>
        </ImageBackground>

        <View style={estilos.conteudo}>
          {/*showsVerticalScrollIndicator tira a exibição da barra de rolagem */}
          <ScrollView showsVerticalScrollIndicator={false}>
            <Text>
              Avaliação: {filme.vote_average} | Lançamento: {filme.release_date}
            </Text>
            <Text style={estilos.descricao}>
              {filme.overview || "Sem descrição"}
            </Text>
          </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Detalhes;

const estilos = StyleSheet.create({
  safeContainer: { flex: 1 },
  container: {
    flex: 1,
    /* aplicado aqui pois no ios não funciona direito na SafeAreaView */
    /*  padding: 8, */
  },
  imagem: {
    height: 200,
    justifyContent: "center",
  },
  conteudo: {
    flex: 1 /* necessario para o scrollView funcionar */,
    padding: 16,
  },
  descricao: {
    fontSize: 16,
    lineHeight: 20,
    marginVertical: 8,
  },
  titulo: {
    backgroundColor: "rgba(0, 0, 0, 0.4)",
    color: "white",
    textAlign: "center",
    padding: 10,
    fontWeight: "bold",
    fontSize: 16,
  },
});
