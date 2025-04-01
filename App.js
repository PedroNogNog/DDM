import { StyleSheet, Text, View, TouchableOpacity, TextInput, Image } from 'react-native';
  import {Feather} from '@expo/vector-icons';
  import styles from './estilos/style.js';
  import Cabecalho from './src/componentes/cabecalho/index.js';
  import Pesquisa from './src/componentes/pesquisa/index.js';


  export default function App() {
  const imagem = Math.floor(Math.random() * 4 +1);
 
  return (
 
  <View style={styles.container}>
 

    <View style= {styles.containerSearch}>
 
    <TextInput style= {styles.inputSearch} placeholder="Digite o filme que deseja buscar"></TextInput>
 
</View>  
  <Text style = {styles.textBanner}> Em cartaz </Text>
 <Image style = {styles.imageBanner} source = {require('./assets/cinemark.jpg')}/>

 <Image style = {styles.imageBanner} source = {require('./assets/john-wick-chapter-4-3840x2160-18980.jpg')}/>

 <Image style = {styles.imageBanner} source = {require('./assets/maxresdefault.jpg')}/>
 
 
  </View>



  );
}
