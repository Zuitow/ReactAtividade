import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button, Image, ImageBackground, TouchableOpacity } from 'react-native';

export default function App() {
 
pressButton =() => {
 alert("Eu não funciono *carinha triste*")
}

mensagem =() => {
  alert("Miau")
}

const imagem2 = { uri: 'https://images.vexels.com/media/users/3/272047/isolated/preview/2e1f0b20d5863bd3531aae733df2b6ba-a-cone-de-gato-preto-de-desenho-animado.png'}
const imagem = { uri: 'https://img.freepik.com/fotos-premium/imagem-de-desenho-de-contorno-branco-de-gato-simples-fundo-preto-arte-gerada-por-ia_848903-3510.jpg' }
  return (

    <View style={estilos.container}>

<ImageBackground style={estilos.img} source={imagem} >
     

      <View style={[estilos.header, { backgroundColor: 'gray', width: '100%', height: 110 }]}>
        <Text style={{fontSize: 25,}}>Bem-vindo  Página de Paulo</Text>
      </View>
      <View style={estilos.secondaryContainer}>
        <Text style={{ color: '#fff', fontSize: 30, fontWeight: 'bold', textAlign: 'end' }}>Insira Usuário e Senha</Text>
        <TextInput style={estilos.inputName} placeholder='Digite seu Email' ></TextInput>
        <TextInput style={estilos.inputName} placeholder='Digite sua senha' secureTextEntry= {true} keyboardType='numeric' ></TextInput>
       
        <Button onPress={pressButton} title='Entra'
        color='gray'></Button>

      </View>
      
      <View style={{ backgroundColor: 'gray', width: '100%', height: 80 }}>
        <TouchableOpacity onPress={mensagem}> 
      <Image source={imagem2} style={estilos.img2} ></Image>
      </TouchableOpacity>
      </View>
      </ImageBackground>
    </View>

  );
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    
  },
  secondaryContainer: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    padding: 15,
  },
  inputName: {
    borderWidth: 1,
    borderColor: 'black',
    padding: 15,
    fontSize: 20,
    placeholder:'Digite sua senha',
    inputMode: 'text',
    placeholderTextColor: 'red',
    margin: 5,
    backgroundColor: '#fff'
  },
  img: {
    width: '100%',
    height: '100%'
  },
  header: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  img2: {
    width: 100,
    height: 100,
  },
  
});