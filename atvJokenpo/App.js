
import { StyleSheet, Text, View, Image} from 'react-native';
import{ useState } from "react";
import { TouchableOpacity } from 'react-native-web';

export default function App() { 
  const[imgJogador, setImgJogador] = useState(0)
  const[imgBot, setImgBot] = useState(0)
  const[placarJogador, setPlacarJogador] = useState(0)
  const[placarBot, setPlacarBot] = useState(0)

  function exibirImg(valor){
    if(valor==0){
      return(<Image source={require('./assets/box.avif')} style={{width: '100%', height: '100%'}}></Image>)
    }else if(valor==1){
      return(<Image source={require('./assets/pedra.png')} style={{width: '90%', height: '90%'}}></Image>)
    }else if(valor==2){
      return(<Image source={require('./assets/papel.png')} style={{width: '90%', height: '90%'}}></Image>)
    }else if(valor==3){
      return(<Image source={require('./assets/tesoura.png')} style={{width: '90%', height: '90%'}}></Image>)
    }
  }
  function jogar(jogadaJogador){
    setImgJogador(jogadaJogador)
    let jogadaBot = Math.floor(Math.random()*3)+1
    setImgBot(jogadaBot)
    if(jogadaJogador==1 && jogadaBot==3 || jogadaJogador==2 && jogadaBot==1 || jogadaJogador==3 && jogadaBot==2){
      setPlacarJogador(placarJogador+1)
    }else if(jogadaBot==1 && jogadaJogador==3 || jogadaBot==2 && jogadaJogador==1 || jogadaBot==3 && jogadaJogador==2){
      setPlacarBot(placarBot+1)
    }
  }
  function reset(){
    setImgJogador(0)
    setImgBot(0)
    setPlacarBot(0)
    setPlacarJogador(0)
  }
  return (
    <View style={styles.container}>
      <View style={styles.cx}>
        <Image style={{flex:1}} source={require("./assets/jokenpo-logo.png")}/>
      </View>
      <View style={styles.cx}>
        <View style={styles.placar}>
          <Text style={styles.txtPlacar}> Placar</Text>
        </View>
        <View style={styles.saldoPlacar}>
          <View style={{width:'50%', alignItems:'center'}}>
            <Text style={styles.txtPlacar}>{placarJogador}</Text>
          </View>
          <View style={{width:'50%', alignItems:'center'}}> 
            <Text style={styles.txtPlacar}>{placarBot}</Text>
          </View>
        </View>
      </View>
      <View style={styles.cx}>
        <View style={styles.saldoPlacar}>
          <View style={{width: '33%'}}>
            {exibirImg(imgJogador)}
          </View>
          <View style={{width: '33%'}}>
            <Image source={require('./assets/vs.png')} style={{width: '100%', height: '100%'}}></Image>
          </View>
          <View style={{width: '33%'}}>
            {exibirImg(imgBot)}
          </View>
        </View>
      </View>
      <View style={styles.placar}>
        <TouchableOpacity style={{width:'50%', height:'75%'}} onPress={()=>reset(0)}><Image source={require('./assets/botao.jpg')} style={{width: '100%', height: '100%'}}></Image></TouchableOpacity>
      </View>
      <View style={styles.cx}>
      <View style={styles.saldoPlacar}>
          <View style={{width: '33.3%'}}>
            <TouchableOpacity style={{width:'100%', height:'100%'}} onPress={()=>jogar(1)}>
              <Image source={require('./assets/pedra.png')} style={{width: '90%', height: '90%'}}></Image>
            </TouchableOpacity>
          </View>
          <View style={{width: '33.3%'}}>
            <TouchableOpacity style={{width:'100%', height:'100%'}} onPress={()=>jogar(2)}>
              <Image source={require('./assets/papel.png')} style={{width: '90%', height: '90%'}}></Image>
            </TouchableOpacity>
          </View>
          <View style={{width: '33.3%'}}>
            <TouchableOpacity style={{width:'100%', height:'100%'}} onPress={()=>jogar(3)}>
              <Image source={require('./assets/tesoura.png')} style={{width: '90%', height: '90%'}}></Image>
            </TouchableOpacity>
          </View>
        </View>
      </View>
   </View>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  cx: {
    flex:1,
  },
  placar:{
    flex: 1,
    alignItems: "center",
  },
  txtPlacar:{
    fontFamily: 'Arial',
    fontSize: 30,
    fontWeight: 'bold',
  },
  saldoPlacar:{
    flex: 1, 
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  numPlacar:{
    width: '50%',
    alignItems: 'center',
    borderWidth: 2,
  }
});
