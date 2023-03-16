import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Picker, Switch, TextInput } from 'react-native-web';
import { isEnabled } from 'react-native/Libraries/Performance/Systrace';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.fotoUsu}>
        <Image
          style={{width: 100, height: 100, borderRadius: 50, borderWidth: 2}}
          source={require("./assets/icon.jpg")}
          />
      </View>
      <View style={styles.caixa}>
        <Text style={styles.text}>Dados Pessoais</Text>
        <TextInput 
          placeholder="Digite Seu Nome"
          style={styles.input}
        />
        <TextInput 
          placeholder="Digite Seu Telefone"
          style={styles.input}
        />
        <TextInput 
          placeholder="Digite Seu Endereço"
          style={styles.input}
        />
        <TextInput 
          placeholder="Digite Seu Email"
          style={styles.input}
        />
      </View>
      <View style={styles.caixa}>
        <Text style={styles.text}>Outras Informações</Text>        
        <Picker
         
          style={styles.caixa} 
           
        >
            <Picker.Item label="Selecione..." value="selecione"/>
            <Picker.Item label="Programar" value="programar"/>
            <Picker.Item label='Jogar' value='jogar'/>

        </Picker>
      </View>
      
       
        
      <View style={styles.caixa}>
        <Text style={styles.text}>Nome:</Text>
        <Text style={styles.text}>Telefone:</Text>
        <Text style={styles.text}>Endereço:</Text>
        <Text style={styles.text}>Email:</Text>
        <Text style={styles.text}>Hobby:</Text>
        <Text style={styles.text}>Aceito:</Text>
      </View>
    </View>
  );  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#DCDCDC',
  },
  
  fotoUsu: {
    
  },

  caixa: {
    borderWidth: 2,
    borderRadius: 5,
    width: '95%',
    padding: '1%',
    margin: '2%',
    backgroundColor: '#FFFFFF',

  },
  
  text: {
    fontSize: 15,
    fontWeight: 'bold',
    padding: '1%',
  },

  input: {
    borderWidth: 1,
    padding: '1%',
    margin: '1%',
    fontSize: 15,
  },
});
