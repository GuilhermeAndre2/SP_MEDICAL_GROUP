import React, {Component} from 'react'
import { FlatList, Image, StyleSheet, Text, View, TouchableOpacity} from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import api from '../SRC/Services/api.js'

export default class ListaConsultaPaciente extends Component{
  constructor(props){
    super(props);
    this.state = {
      ListaMinhas : []
    }
  }

  MinhasConsultas = async () => {
    const TokenData = await AsyncStorage.getItem('SPMG_token')
    const resposta = await api.get('/Consultas/minhas', {headers : { 'Authorization' : 'Bearer ' + TokenData}});
    const DadosApi = resposta.data;
    this.setState({ListaMinhas : DadosApi });
  };

  Logout = async() => {
    try{
        await AsyncStorage.removeItem('userToken');
        this.props.navigation.navigate('Login');
    }catch(erro){
        console.warn(erro)
    }
};


  componentDidMount(){
    this.MinhasConsultas();
  }

  render(){
      return(
        <View style={styles.container}>
        <View style={styles.Header} >
        <Image source = {require('../assets/img/Branco Ícone de Hospital Médico Logotipo 1.png')} style = {styles.logo}/>
        <TouchableOpacity onPress={this.Logout}>
                    <Image source={require('../assets/img/sign-out-alt-solid.svg')} style = {styles.Logout} />
        </TouchableOpacity>
        </View>
        <Text style = {styles.tituloPag}>Minhas Consultas</Text>
        <FlatList 
        data={this.state.ListaMinhas}
        contentContainerStyle={styles.Lista}
        keyExtractor={item => item.idConsulta}
        renderItem={this.renderItem}
        />
    </View>
      )
  }

  renderItem = ({item}) => (
    <View style={styles.container}>
        <View style={styles.linhaListar}>           
            <Text style={styles.listaText}>IdConsulta: {item.idConsulta}</Text>
        </View>
        <View style={styles.linhaListar}>
            <Text style={styles.listaText}>Nome Paciente: {item.idPacienteNavigation.nome}</Text>
        </View>
        <View style={styles.linhaListar}>           
            <Text style={styles.listaText}>Nome Medico: {item.idMedicoNavigation.nome}</Text>
        </View>
        <View style={styles.linhaListar}>
            <Text style={styles.listaText}>Crm Medico: {item.idMedicoNavigation.crm}</Text>
        </View>
        <View style={styles.linhaListar}>           
            <Text style={styles.listaText}>Data Consulta: {item.dataConsulta}</Text>
        </View>
        <View style={styles.linhaListar}>
            <Text style={styles.listaText}>Situação: {item.idSituacaoNavigation.situacao1}</Text>
        </View>
    </View>
)
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: '#f1f1f1',
    
  },
  MainImg : {
    width : 100
  },
  container: {
    flex: 1,
    alignItems : 'left',
    backgroundColor: '#fff',
    marginTop : 45,
    marginBottom : 10,
    borderBottom : 3
  },

  contentConsulta: {
    width: 250,
    height: 140,
    fontSize: 19,
    paddingLeft: 14,
    marginRight: 20,
    marginBottom: 20,
    justifyContent: 'center'
  },

  logo : {
      width: 265,
      height : 165,
      marginLeft : 70,
      alignItems : 'center'
  },

  tituloPag : {
      fontSize : 18,
      textTransform : 'uppercase',
      letterSpacing : 6,
      color : 'black',
      marginTop : 50,
      fontWeight : 'bold',
      marginLeft : 60,
      alignItems : 'center'
  },

  listaText: {
    fontSize: 17,
    color: 'black',
    marginLeft : 50,
  },

  linhaListar: {
    flexDirection: 'row',
    alignItems: 'left',
    marginBottom: 10,
  },

  iconDesc : {
    width: 18,
    height: 18,
    tintColor: '#fff',
    marginRight : 15
  },

  iconName : {
      width: 16,
      height: 23,
      tintColor: '#fff',
      marginRight : 12,
      marginLeft : 4
  },

  iconTema : {
      width: 23,
      height : 18,
      tintColor: '#fff',
      marginRight : 10
  },
  Logout : {
      width : 20,
      height : 20,
      tintColor : 'black',
      marginTop : 95,          
  },
  Header : {
      flexDirection : 'row',
  },
});