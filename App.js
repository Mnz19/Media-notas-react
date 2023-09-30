import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Keyboard } from 'react-native';
import React, { useState } from 'react';

export default function App() {

  const [nota1, setNota1] = useState('');
  const [nota2, setNota2] = useState('');
  const [media, setMedia] = useState(null)

  const handleNota1Change = (nota) => {
    setNota1(nota);
  };

  const handleNota2Change = (nota) => {
    setNota2(nota);
  };

  const handleSubmite = () => {
    const n1 = parseFloat(nota1);
    const n2 = parseFloat(nota2);

    if (isNaN(n1) || isNaN(n2)) {
      setMedia(null)
    } else {
      const mediaCalculada = (n1 + n2)/2
      setMedia(mediaCalculada.toFixed(2))
    }
    Keyboard.dismiss();
  }

  return (
    <View style={styles.container}>
      <View style={styles.containerBox}>
        <Text style={styles.containerText}>Média de Notas</Text>

        <TextInput
        onChangeText={handleNota1Change}
        value={nota1}
        placeholder='Nota 1'
        style={styles.input}
        keyboardType='numeric'
        ></TextInput>

        <TextInput
        onChangeText={handleNota2Change}
        value={nota2}
        placeholder='Nota 2'
        style={styles.input}
        keyboardType='numeric'
        ></TextInput>

        <TouchableOpacity
        onPress={handleSubmite}
        style={styles.button}
        >
          <Text style={styles.buttonText}>Calcular</Text>
        </TouchableOpacity>

        <StatusBar style="auto" />
      </View>

      <View style={styles.containerResult}>
        {media !== null && <Text style={styles.resultText}>Média: {media}</Text>}
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
    height: 40,
    width: 200,
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
