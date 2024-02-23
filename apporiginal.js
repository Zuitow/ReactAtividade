import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button, Image, ImageBackground } from 'react-native';

export default function App() {
 
pressButton =() => {
 alert("Você me apertou!")
}

const imagem = { uri: 'https://s2-techtudo.glbimg.com/L9wb1xt7tjjL-Ocvos-Ju0tVmfc=/0x0:1200x800/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2023/q/l/TIdfl2SA6J16XZAy56Mw/canvaai.png'}
  return (

    <View style={estilos.container}>

      <ImageBackground style={estilos.img} source={imagem} >
        <Text style={{fontSize: 100}}>HELLO!</Text>
      </ImageBackground>

      <View style={{ backgroundColor: 'gray', width: '100%', height: 60 }}>
      </View>
      <View style={estilos.secondaryContainer}>
        <Text style={{ color: 'blue', fontSize: 30, fontWeight: 'bold', textAlign: 'end' }}>Paulo Cesar</Text>
        <TextInput style={estilos.inputName} ></TextInput>
        <TextInput style={estilos.inputName} placeholder='Digite sua senha' secureTextEntry= {true} keyboardType='numeric' ></TextInput>
        <Text style={[{ color: 'blue', fontSize: 25, fontStyle: 'italic', textAlign: 'start', borderWidth: 1, borderColor: 'black', borderRadius: 15, marginTop: 15 }]}>30</Text>
        <Text style={{ color: 'black', backgroundColor: 'pink', fontSize: 20, fontStyle: 'italic', textAlign: 'center', marginTop: 15 }}>Sala 7</Text>
        <Text style={{color: 'black',fontSize: 25, backgroundColor: 'gray', borderWidth: 1, borderColor: 'black', borderRadius: 15, textAlign: 'center', marginTop: 15}}>Kuroi Killa</Text>
        <Button style={{
          backgroundColor: 'red', 
          borderWidth: 1, 
          borderRadius: 20,
        }} onPress={pressButton} title='Me aperte'
        color='gray'></Button>

      </View>
      <View style={{ backgroundColor: 'gray', width: '100%', height: 60 }}>
      </View>
    </View>

  );
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    
  },

  img:{
    flex: 1,
    width: '100%',
    resizeMode: 'cover',
    alignItems: 'center',
    justifyContent: 'center',
  },

  secondaryContainer: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    backgroundColor: '#fff',
    padding: 15,
  },
  inputName: {
    borderWidth: 1,
    borderColor: 'black',
    padding: 15,
    fontSize: 20,
    placeholder:'Digite sua senha',
    inputMode: 'text',
    placeholderTextColor: 'red'
  }
});