import React from 'react' 
import {View, Image, Text, TouchableOpacity} from 'react-native'; 
import styles from './style'; 

export default function CardMovies(){ 

return( 

    <TouchableOpacity style={styles.containerJogos} > 
    
<Image style = {styles.images} source = {require('../../Img/gato.jpg')} /> 
<Text style ={styles.titulo}>TITULO DO FILME </Text> 
<Text style = {styles.textNota}> NOTA DO FILME </Text> 

</TouchableOpacity> 

); 
}
