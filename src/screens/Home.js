import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Pressable,
  Image,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useFonts } from "expo-font";
import logo from "../../assets/images/logo.png";

const corPrimaria = "#5451a6";

const Home = () => {
  const [fonteCarregada] = useFonts({
    monoton: require("../../assets/fonts/Monoton-Regular.ttf"),
  });

  if (!fonteCarregada) return <Text>Fonte sendo carregada...</Text>;

  return (
    <SafeAreaView style={estilos.container}>
      <View style={estilos.viewLogo}>
        <Image style={estilos.logo} source={logo} />
        <Text style={estilos.tituloApp}>Melhores Filmes!</Text>
      </View>

      <View style={estilos.viewBotoes}>
        <Pressable style={estilos.botaoInicial}>
          <Text style={estilos.textoBotao}>
            Buscar filmes <Ionicons name="search" size={16} color="white" />
          </Text>
        </Pressable>

        <Pressable style={estilos.botaoInicial}>
          <Text style={estilos.textoBotao}>
            Favoritos <Ionicons name="star" size={16} color="white" />
          </Text>
        </Pressable>
      </View>

      <View style={estilos.viewRodape}>
        <Pressable style={estilos.botaoRodape}>
          <Text style={estilos.textoRodape}>
            Privacidade <Ionicons name="lock-closed" size={16} color="white" />
          </Text>
        </Pressable>

        <Pressable style={estilos.botaoRodape}>
          <Text style={estilos.textoRodape}>
            Sobre <Ionicons name="information-circle" size={16} color="white" />
          </Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default Home;

const estilos = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  viewLogo: {
    flex: 3,
    textAlign: "center",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  logo: {
    width: 130,
    height: 130,
  },
  tituloApp: {
    fontSize: 32,
    color: "#5451a6",
    fontFamily: "monoton",
  },
  viewBotoes: {
    flex: 2,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "flex-start",
    width: "80%",
  },
  botaoInicial: {
    borderStyle: "solid",
    borderWidth: 2,
    padding: 16,
    backgroundColor: "#5451a6",
  },
  textoBotao: {
    color: "white",
  },
  viewRodape: {
    flex: 0.5,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    backgroundColor: "#5451a6",
  },
  botaoRodape: {
    padding: 16,
  },
  textoRodape: {
    color: "white",
    fontSize: 16,
  },
});
