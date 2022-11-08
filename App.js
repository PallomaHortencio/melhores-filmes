import { StatusBar, StyleSheet } from "react-native";
import Home from "./src/screens/Home";
import Favoritos from "./src/screens/Favoritos";
import FormBusca from "./src/screens/FormBusca";
import Privacidade from "./src/screens/Privacidade";
import Sobre from "./src/screens/Sobre";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const App = () => {
  /* Inicializando através de uma constante o gerenciador de navegação Stack (pilha de telas) */
  const Stack = createNativeStackNavigator();

  return (
    <>
      {/* opções para o barStyle: dark-content, light-content ou default*/}
      <StatusBar barStyle="dark-content" />

      {/* O NavigationContainer deve envolver todas as telas navegaveis do nosso app */}
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen component={Home} name="Home" />
          <Stack.Screen component={FormBusca} name="FormBusca" />
          <Stack.Screen component={Favoritos} name="Favoritos" />
          <Stack.Screen component={Privacidade} name="Privacidade" />
          <Stack.Screen component={Sobre} name="Sobre" />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;

const estilos = StyleSheet.create({});
