import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { calcularMedia } from './media';

export default function App() {
  const [nota1, setNota1] = useState(0)
  const [nota2, setNota2] = useState(0)
  const [resultado, setResultado] = useState()

  const calcular = () => {
    const media = calcularMedia(Number(nota1), Number(nota2))
    setResultado(media)
  }
  
  return (
    <View style={styles.container}>

      <View style={styles.containerBox}>
        <Text style={styles.containerText}>Média de Notas</Text>
        <TextInput placeholder='Nota 1' style={styles.input} onChangeText={setNota1}></TextInput>
        <TextInput placeholder='Nota 2' style={styles.input} onChangeText={setNota2}></TextInput>
        <TouchableOpacity style={styles.button} onPress={calcular}>
          <Text style={styles.buttonText}>Calcular</Text>
        </TouchableOpacity>
        <StatusBar style="auto" />
      </View>

      <View style={styles.containerResult}>
        {
        resultado == undefined ? 
        <Text style={styles.resultText}>Esperando notas...</Text> : 
        <Text style={styles.resultText}>{resultado}</Text>
        }
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e2fbfa',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'sans-serif',
  },
  containerBox:{
    backgroundColor: '#ffffff',
    height: '37%',
    width: '70%',
    alignItems: 'center',
    justifyContent:'space-evenly',
    // borderRadius: 20,
    elevation: 15,
    shadowColor: '52006A'
  },  
  containerText:{
    marginBottom: 10,
    fontSize: 30,
  },
  input:{
    backgroundColor: '#e2fbfa',
    paddingVertical: 6,
    paddingHorizontal: 85,
    borderRadius: 10,
    elevation: 2, 
  },
  button:{
    backgroundColor: '#e2fbfa',
    paddingVertical: 7,
    paddingHorizontal: 30,
    elevation: 2,
    borderRadius: 10,
  },
  containerResult:{
    marginTop:30,
    alignItems:'center',
  },
  resultText: {
    fontSize: 25,
    marginBottom:20,
  },
});
