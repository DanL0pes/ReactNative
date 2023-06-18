import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Touchable, View, Image} from 'react-native';
import { useState } from 'react';
import { TouchableOpacity } from 'react-native-web';



export default function App() {
//frase que está na tela
const [impressao, setImpressao] = useState("")
//número da imagem  que está na tela
const [img, setImg] = useState(0)

const frases = [
  'Siga os bons e aprenda com eles.',
  'O bom-senso vale mais do que muito conhecimento.',
  'O riso é a menor distância entre duas pessoas.',
  'Deixe de lado as preocupações e seja feliz.',
  'Realize o óbvio, pense no improvável e conquiste o impossível.',
  'Acredite em milagres, mas não dependa deles.',
  'A maior barreira para o sucesso é o medo do fracasso.'
];
//FUNÇÃO EMBAIXO DE VARIAVEL
function quebrar(){
  if(img == 0){
    let numAleatorio = Math.floor(Math.random() * frases.length);
    setImpressao(frases[numAleatorio])
    setImg(1)
  }
}

function novo(){
  setImpressao(frases[''])
  setImg(0)
}

function exibirImagem(numero){
  if(numero==0){
    return(<Image source={require('./assets/biscoito.png')}  style={styles.img}/>)
  }else{
    return(<Image source={require('./assets/biscoitoAberto.png')} style={styles.img}/>)
  }
}

  return (
    <View style={styles.container}>
      {exibirImagem(img)}
      <Text style={styles.textoFrase}>{impressao}</Text>
      <TouchableOpacity style={styles.botao} onPress={()=>quebrar()}>
        <View style={styles.btnArea}>
          <Text style={styles.btnTexto}>Quebrar Biscoito</Text>
        </View>  
      </TouchableOpacity>
      <TouchableOpacity style={styles.botao} onPress={()=>novo()}>
        <View style={styles.btnArea}>
          <Text style={styles.btnTexto}>Novo Biscoito</Text>
        </View>  
      </TouchableOpacity>
    </View>
  );
}

 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  img: {
    height:250,
    width: 250,
  },
  textoFrase:{
    fontSize:20,
    color:'#dd7b22',
    margin:30,
    fontStyle:'italic',
    textAlign:'center'
  },
  botao:{
    width:230,
    height:50,
    borderWidth:2,
    borderColor: '#dd7b22',
    borderRadius: 25,
    margin: 10  
  },
  btnArea:{
    flex:1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  btnTexto:{
    color: '#dd7b22',
    fontSize:18,
    fontWeight: 'bold'
  }
});

