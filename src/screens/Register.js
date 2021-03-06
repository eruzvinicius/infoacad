import React, { Component } from 'react'
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    TextInput,
    Image
} from 'react-native'
import { connect } from 'react-redux'
import { createUser } from '../store/actions/user'
import DropDownPicker from 'react-native-dropdown-picker/src';

class Register extends Component {
    state = {
        name: '',
        email: '',
        password: '',
        cpf:'',
        categoria: '',
        curso: '',
        isVisibleCategoria: false,
        isVisibleCurso: false,
    }

    componentDidUpdate = prevProps => {
        if (prevProps.isLoading && !this.props.isLoading) {
            this.setState({
                name: '',
                email: '',
                password: '',
                cpf:'',
                categoria: '',
                curso: '',
                isVisibleCategoria: false,
                isVisibleCurso: false,
            })
            this.props.navigation.navigate('Login')
        }
    }

    changeVisibility(state) {
        this.setState({
            isVisibleCategoria: false,
            isVisibleCurso: false,
            ...state
        });
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.titulo}>InfoAcad</Text>
                <View style={styles.viewBorder}>
                    <TextInput placeholder='Nome' style={styles.input}
                        autoFocus={false} value={this.state.name}
                        onChangeText={name => this.setState({ name })} />
                </View>
                <View style={styles.viewBorder}>
                    <TextInput placeholder='CPF' style={styles.input}
                     value={this.state.cpf}
                    onChangeText={cpf => this.setState({ cpf })} />
                </View> 
                <View style={styles.viewBorder}>
                    <TextInput placeholder='Email' style={styles.input}
                    keyboardType='email-address' value={this.state.email}
                    onChangeText={email => this.setState({ email })} />
                </View>    
                <View style={styles.viewBorder}>
                    <TextInput placeholder='Senha' style={styles.input}
                        secureTextEntry={true} value={this.state.password}
                        onChangeText={password => this.setState({ password })} />
                </View>
                
                <DropDownPicker style={styles.combo}
                    isVisible = {this.state.isVisibleCategoria}
                    onOpen={() => this.changeVisibility({isVisibleCategoria: true})}
                    onClose={() => this.setState({isVisibleCategoria: false })}
                    

                    items={[
                        {label: 'Servidor', value: 'Servidor',},
                        {label: 'Acad??mico', value: 'Acad??mico', },
                        {label: 'Egresso', value: 'Egresso',},
                        {label: 'Outro', value: 'Outro',},
                    ]}
                    
                    placeholder = 'Selecione uma categoria'
                    defaultValue={this.state.categoria}
                    onChangeItem={item => this.setState({categoria: item.value})}

                    style={{borderTopLeftRadius: 10,
                            borderTopRightRadius: 10,
                            borderBottomLeftRadius: 10,
                            borderBottomRightRadius: 10,
                            borderWidth: 2,
                            borderColor: '#309F41',
                            backgroundColor: '#EEE',
                            height: 40
                            }}

                    dropDownStyle={{backgroundColor: '#fafafa'}}
                    containerStyle={{width: '90%', height: 40, marginTop: 20}}
                    itemStyle={{justifyContent: 'flex-start'}}

                    labelStyle={{
                        fontSize: 14,
                        textAlign: 'left',
                        color: '#959595'
                    }}
                    selectedLabelStyle={{
                         color: '#959595',
                    }}
                    activeLabelStyle={{color: '#309F41'}}
                    arrowStyle={{marginRight: 10}}

                />

                <DropDownPicker 
                    isVisible = {this.state.isVisibleCurso}
                    onOpen={() => this.changeVisibility({isVisibleCurso: true})}
                    onClose={() => this.setState({isVisibleCurso: false })}

                    items={[
                        {label: 'N??o se Aplica', value: 'N??o se Aplica',},
                        {label: 'T??cnico em Alimentos', value: 'T??cnico em Alimentos', },
                        {label: 'T??cnico em Servi??os Jur??dicos', value: 'T??cnico em Servi??os Jur??dicos',},
                        {label: 'Administra????o', value: 'Administra????o',},
                        {label: 'Agronomia', value: 'Agronomia',},
                        {label: 'Artes Visuais', value: 'Artes Visuais',},
                        {label: 'Ci??ncias Biol??gicas', value: 'Ci??ncias Biol??gicas',},
                        {label: 'Ci??ncias Cont??beis', value: 'Ci??ncias Cont??beis',},
                        {label: 'Direito', value: 'Direito',},
                        {label: 'Educa????o F??sica', value: 'Educa????o F??sica',},
                        {label: 'Enfermagem', value: 'Enfermagem',},
                        {label: 'Farm??cia', value: 'Farm??cia',},
                        {label: 'Letras - Portugu??s/Ingl??s', value: 'Letras - Portugu??s/Ingl??s',},
                        {label: 'Pedagogia', value: 'Pedagogia',},
                        {label: 'Qu??mica', value: 'Qu??mica',},
                        {label: 'Sistemas de Informa????o', value: 'Sistemas de Informa????o',},
                        {label: 'P??s Gradua????o em Linguagens H??bridas e Educa????o', value: 'P??s Gradua????o em Linguagens H??bridas e Educa????o',},
                        {label: 'Outro', value: 'Outro',}            
                    ]}
                    
                    placeholder = 'Selecione um curso'
                    defaultValue={this.state.curso}
                    onChangeItem={item => this.setState({curso: item.value})}

                    style={{borderTopLeftRadius: 10,
                            borderTopRightRadius: 10,
                            borderBottomLeftRadius: 10,
                            borderBottomRightRadius: 10,
                            borderWidth: 2,
                            borderColor: '#309F41',
                            backgroundColor: '#EEE',
                            height: 40
                            }}

                    dropDownStyle={{backgroundColor: '#fafafa'}}
                    containerStyle={{width: '90%', height: 40, marginTop: 20}}
                    itemStyle={{justifyContent: 'flex-start'}}

                    labelStyle={{
                        fontSize: 14,
                        textAlign: 'left',
                        color: '#959595'
                    }}
                    selectedLabelStyle={{
                         color: '#959595',
                    }}
                    activeLabelStyle={{color: '#309F41'}}
                    arrowStyle={{marginRight: 10}}

                />
                    
                <TouchableOpacity 
                    onPress={() => { this.props.onCreateUser(this.state) }} 
                    style={styles.button}>
                    <Text style={styles.buttonText}>Salvar</Text>
                </TouchableOpacity>
                <View style={styles.footer}>
                <Image source={require('../../assets/imgs/IFPR_logo.png')}
                    style={styles.image} />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    button: {
        marginTop: 30,
        padding: 10,
        borderRadius:10,
        backgroundColor:"#309F41",
    },
    buttonText: {
        fontSize: 20,
        color: '#FFF'
    },
    input: {
    },
    viewBorder:{
        backgroundColor: '#EEE',
        borderRadius: 10,
        marginTop: 20,
        width: '90%',
        height: 40,
        borderWidth: 2,
        borderColor: '#309F41',
    },
    footer:{
        flex: 1,
        alignItems: 'center',
        backgroundColor:"#FFF",
        justifyContent: 'flex-end'
    },
    titulo: {
        fontSize: 50,
        fontWeight: 'bold',
        color:'#309F41',
        textShadowColor : "#EEE"
    },
})

const mapStateToProps = ({ user }) => {
    return {
        isLoading: user.isLoading
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onCreateUser: user => dispatch(createUser(user))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Register)