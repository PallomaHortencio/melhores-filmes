import { StatusBar, StyleSheet } from "react-native";
import Favoritos from "./src/screens/Favoritos";
import FormBusca from "./src/screens/FormBusca";
import Privacidade from "./src/screens/Privacidade";
import Sobre from "./src/screens/Sobre";

const App = () => {
  return (
    <>
      {/* opções para o barStyle: 
    dark-content, light-content ou default*/}
      <StatusBar barStyle="light-content" />
      <Privacidade />
    </>
  );
};

export default App;

const estilos = StyleSheet.create({});
