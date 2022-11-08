import { StatusBar, StyleSheet } from "react-native";
import Favoritos from "./src/screens/Favoritos";
import FormBusca from "./src/screens/FormBusca";
import Sobre from "./src/screens/Sobre";

const App = () => {
  return (
    <>
      {/* opções para o barStyle: 
    dark-content, light-content ou default*/}
      <StatusBar barStyle="light-content" />
      <Sobre />
    </>
  );
};

export default App;

const estilos = StyleSheet.create({});
