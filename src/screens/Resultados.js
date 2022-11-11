import { StyleSheet, Text, View, Image, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import api from "../services/api";
import apiKey from "../../apiKey";
import Loading from "../components/Loading";

const Resultados = ({ route }) => {
  const { filme } = route.params;

  const [resultados, setResultados] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function buscarFilmes() {
      try {
        const resposta = await api.get("/search/movie", {
          params: {
            api_key: apiKey,
            language: "pt-BR",
            query: filme,
            include_adult: false,
          },
        });

        setResultados(resposta.data.results);

        /* Simulando um tempo de carregamento lento usando temporizador setInterval */
        setInterval(() => {
          setLoading(false);
        }, 3000);
      } catch (error) {
        console.log("Deu ruim na busca da API: " + error.message);
      }
    }
    buscarFilmes();
  }, []);

  console.log(resultados);

  return (
    <SafeAreaView style={estilos.container}>
      <Text>Você buscou por: {filme}</Text>

      {loading && <Loading />}

      <View style={estilos.viewFilmes}>
        {!loading && (
          <FlatList
            data={resultados}
            renderItem={({ item }) => {
              return (
                <View>
                  <Image
                    style={estilos.imagem}
                    source={{
                      uri: `https://image.tmdb.org/t/p/original/${item.poster_path}`,
                    }}
                  />
                  <Text>{item.title}</Text>
                </View>
              );
            }}
            keyExtractor={(item) => item.id}
          />
        )}
      </View>
    </SafeAreaView>
  );
};

export default Resultados;

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  viewFilmes: {
    marginVertical: 8,
  },
  imagem: {
    height: 150,
    width: 150,
  },
});
