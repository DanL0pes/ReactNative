
import { StyleSheet, Text, View, Image, Modal} from 'react-native';
import React, {useState } from "react";
import { TouchableOpacity } from 'react-native-web';

export default function App() {
  const [modalBase, setModalBase] = useState(false);
  const [modalOvo, setModalOvo] = useState(0);
  const [ovo, setOvo] = useState([
    {nome:'Leonarda',
    pai:'Vegetta e Foolish',
    imagem:require('./assets/leonardaPixel.png'),
    nascimento: 'Leonardo, também conhecido como Leonarda, é um dos ovos do QSMP adotado por Foolish e Vegetta durante o evento de adoção em 3 de Abril de 2023.',
    fisiologia: 'Leonarda é um ovo branco e pixelizado com duas pernas pretas saindo de sua casca. Ela usa um boné de beisebol vermelho virado para trás, com um botão branco em cima. No entanto, após os sequestros em 30 de abril de 2023, Leonarda voltou para casa com uma rachadura na casca do ovo.',
    },
    {nome:'Chayanne',
    pai:'Ph1lza e Missasinfonia',
    imagem:require('./assets/chayannePixel.png'),
    nascimento: 'Chayanne é um ovo de dragão no QSMP adotado por Missasinfonia e Ph1lzA durante o Evento dos Parceiros de Ovos em 3 de Abril de 2023.',
    fisiologia: 'Chayanne é um ovo branco e pixelado com duas pernas pretas saindo de sua casca. Ele ostenta um anel de pato amarelo vibrante, completo com um bico laranja e olhos castanhos claros. Segundo ele, a boia de pato lhe dá superpoderes.',
    },
    {nome:'Richarlyson',
    pai:'Cellbit, Felps, Forever, Mike e Pac',
    imagem:require('./assets/richarlysonPixel.png'),
    nascimento: 'Richarlyson é um dos ovos no QSMP. Diferentemente de seus irmãos, Richarlyson não estava presente durante o Evento dos Ovos, e só foi encontrado em 30 de abril - o dia em que o navio de carga com os criadores de conteúdo brasileiros colidiu com a Ilha Quesadilla.',
    fisiologia: 'Richarlyson é um ovo branco e pixelizado com duas pernas pretas, uma maior do que a outra, saindo de sua casca. Sua vestimenta exclusiva é uma camisa de futebol verde e amarela do Brasil. Além disso, também é mostrado que ele tem metade de uma de suas pernas.',
    },
    {nome:'Ramón',
    pai:'FitMC e SpreenDMC',
    imagem:require('./assets/ramonPixel.png'),
    nascimento: 'Ramón é um dos ovos do QSMP. Depois que a mãe dragão desapareceu, o ovo foi inicialmente colocado para adoção junto com os outros durante o evento dos parceiros de ovos em 3 de abril de 2023. Ele foi adotado por FitMC e SpreenDMC.',
    fisiologia: 'Ramón é um ovo branco e pixelizado com duas pernas pretas saindo de sua casca. Ele tem o que parece ser um bigode em formato de guidão. Porém, após os sequestros de 30 de abril de 2023, Ramón voltou para casa com uma rachadura na casca do ovo.',
    },
    {nome:'JuanaFlippa',
    pai:'Slimecicle e ElMariana',
    imagem:require('./assets/juanaFlippaPixel.png'),
    nascimento: 'JuanaFlippa era um ovo de dragão no QSMP que foi adotado por Slimecicle e ElMariana durante o evento de adoção em 3 de abril de 2023.',
    fisiologia: 'JuanaFlippa era um ovo branco e pixelizado com duas pernas pretas saindo de sua casca. Ela usava óculos pretos de meio aro.',
    },
    {nome:'Bobby',
    pai:'Roier e Jaiden',
    imagem:require('./assets/bobbyPixel.png'),
    nascimento: 'Bobby foi um ovo de dragão no QSMP adotado por Roier e JaidenAnimations durante o evento de adoção em 3 de abril de 2023. Ele foi morto por um vingador no dia 57 do servidor e teve sua morte confirmada no dia seguinte.',
    fisiologia: 'Bobby era um ovo branco e pixelizado com duas pernas pretas saindo de sua casca. Ele vestia um macacão azul com as alças se estendendo pelas laterais. No entanto, após os sequestros em 30 de abril de 2023, Bobby voltou para casa com uma rachadura na casca do ovo.',
    },
    {nome:'Tallulah',
    pai:'Wilbur Soot',
    imagem:require('./assets/tallulahPixel.png'),
    nascimento: 'Tallulah é um dos ovos no QSMP. Depois do dragão ter desaparecido, o ovo foi posto para adoção durante o Evento dos Parceiros de Ovos, no dia 3 de abril, 2023. Por razões desconhecidas, ela foi colocada no sotão, que só pode ser acessado em um buraco discreto no teto, que resultou em Tallulah ficando presa no Centro de Adoção sobrevivendo apenas com terra, até que foi encontrada por Wilbur Soot e FitMC. Apesar de Wilbur estar inicialmente em dúvida sobre cuidar de um ovo, ele rapidamente ficou apegado e adotou Tallulah.',
    fisiologia: 'Tallulah é um ovo branco e pixelado com duas pernas pretas saindo de sua casca. Ela tem cabelos marrons cheios e usa uma touca vermelha, se assemelhando a Wilbur Soot. Porém, depois dos desaparecimentos no dia 30 de abril de 2023, ela voltou com sua casca quebrada.',
    },
    {nome:'Tilin',
    pai:'Quackity',
    imagem:require('./assets/tilinPixel.png'),
    nascimento: 'Tilín foi um dos ovos no QSMP, sendo filha de um dragão que desapareceu depois de ser acordado por conta do barulho da explosão da muralha da ilha. No dia 3 de abril, Tilín, junto com os outros ovos de dragão, foram postos no centro de adoção durante o Evento dos Parceiros de Ovos, Quackity adotou o ovo sendo pai solo.',
    fisiologia: 'Tilín era um ovo branco e pixelado com duas pernas pretas saindo de sua casca. Ela usava um lacinho vermelho em cima de sua cabeça.',
    },
    {nome:'Dapper',
    pai:'BadBoyHalo(BBH)',
    imagem:require('./assets/dapperPixel.png'),
    nascimento: 'Dapper é um ovo de dragão no QSMP que foi adotado unicamente por BadBoyHalo durante o evento de adoção em 3 de abril de 2023.',
    fisiologia: 'Dapper é um ovo branco e pixelado com duas pernas pretas saindo de sua casca. Ele usa uma cartola preta com uma faixa marrom. No entanto, após os sequestros de ovos em 30 de abril de 2023, Dapper voltou para a casa com uma rachadura na sua casca.',
    },
    {nome:'Trump',
    pai:'DanTDM e Maximus',
    imagem:require('./assets/trumpPixel.png'),
    nascimento: 'Trump era um ovo de dragão no QSMP adotado por DanTDM e Maximus durante o evento de adoção em 3 de abril de 2023.',
    fisiologia: 'Trump era um ovo branco e pixelizado com duas pernas pretas saindo de sua casca. Ele usava um chapéu de hélice com listras diagonais azuis, verdes, laranjas e vermelhas. A hélice branca em seu boné gira toda vez que ele se move.',
    }
  ])
  function abrir(value){
    setModalBase(true);
    setModalOvo(value);
  }
  function voltar(){
    setModalBase(false);
    setModalOvo(0)
  }
  return (
    <View style={styles.container}>
      <View style={{height: '25%', width: '100%'}}>
        <Image source={require('./assets/qsmp.png')} style={{width: '60%', height: '100%', marginHorizontal: 'auto'}}></Image>
      </View>
      <View style={{flexDirection: 'row'}}>
        <View style={styles.col1}>
          <TouchableOpacity style={styles.ovo} onPress={() => abrir(0)}>
            <Image source={require('./assets/leonardaPixel.png')} style={styles.ovoImg}></Image>
          </TouchableOpacity>
          <TouchableOpacity style={styles.ovo} onPress={() => abrir(1)}>
            <Image source={require('./assets/chayannePixel.png')} style={styles.ovoImg}></Image>
          </TouchableOpacity>
          <TouchableOpacity style={styles.ovo} onPress={() => abrir(2)}>
            <Image source={require('./assets/richarlysonPixel.png')} style={styles.ovoImg}></Image>
          </TouchableOpacity>
          <TouchableOpacity style={styles.ovo} onPress={() => abrir(3)}>
            <Image source={require('./assets/ramonPixel.png')} style={styles.ovoImg}></Image>
          </TouchableOpacity>
          <TouchableOpacity style={styles.ovo} onPress={() => abrir(4)}>
            <Image source={require('./assets/juanaFlippaPixel.png')} style={styles.ovoImg}></Image>
          </TouchableOpacity>
        </View>
        <View style={styles.col1}>
          <TouchableOpacity style={styles.ovo} onPress={() => abrir(5)}>
            <Image source={require('./assets/bobbyPixel.png')} style={styles.ovoImg}></Image>
          </TouchableOpacity>
          <TouchableOpacity style={styles.ovo} onPress={() => abrir(6)}>
            <Image source={require('./assets/tallulahPixel.png')} style={styles.ovoImg}></Image>
          </TouchableOpacity>
            <TouchableOpacity style={styles.ovo} onPress={() => abrir(7)}
            ><Image source={require('./assets/tilinPixel.png')} style={styles.ovoImg}></Image>
          </TouchableOpacity>
            <TouchableOpacity style={styles.ovo} onPress={() => abrir(8)}
            ><Image source={require('./assets/dapperPixel.png')} style={styles.ovoImg}></Image>
          </TouchableOpacity>
            <TouchableOpacity style={styles.ovo} onPress={() => abrir(9)}
            ><Image source={require('./assets/trumpPixel.png')} style={styles.ovoImg}></Image>
          </TouchableOpacity>
        </View>
        <Modal
        animationType="slide"
        visible={modalBase}>
          <View style={styles.containerModal}>
            <TouchableOpacity style={styles.voltar} onPress={() => voltar()}><Image source={require('./assets/voltar.png')} style={{width:"100%", height:"100%"}}></Image></TouchableOpacity>
            <Text style={styles.textoNomeModal}>{ovo[modalOvo].nome}</Text>
            <Text style={styles.textoNomePaiModal}>{ovo[modalOvo].pai}</Text>
            <Image style={styles.ovoImgModal} source={ovo[modalOvo].imagem}></Image>
            <Text style={styles.textoModal}>{ovo[modalOvo].fisiologia}</Text>
            <Text style={styles.textoModal}>{ovo[modalOvo].nascimento}</Text>
          </View>
        </Modal>
      </View>
   </View>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#a16223',
    height: '110%'
  },
  col1: {
    flex:1,
    height: 600,
  },
  ovo:{
    width: '100%', 
    height: '15%',
    marginTop: 25
  },
  ovoImg:{
    width: '40%', 
    height: '100%', 
    marginHorizontal: 'auto'
  },
  ovoImgModal:{
    width: '40%', 
    height: '20%', 
    marginHorizontal: 'auto'
  },
  containerModal: {
    backgroundColor: '#f0eca5',
    height: '100%'
  },
  voltar:{
    height: "10%",
    width: '17.5%'
  },
  textoNomeModal:{
    marginHorizontal: 'auto',
    fontSize: 50,
    fontWeight: "bold"
  },
  textoNomePaiModal:{
    marginHorizontal: 'auto',
    fontSize: 20,
  },
  textoModal:{
    margin: "2%"
  }
});
