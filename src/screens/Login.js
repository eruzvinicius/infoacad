import React, { Component } from 'react'
import { connect } from 'react-redux'
import { login } from '../store/actions/user'
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    TextInput,
    Image
} from 'react-native'

class Login extends Component {
    state = {
        name: 'Temporario',
        email: '',
        password: ''
    }

    componentDidUpdate = prevProps => {
        if (prevProps.isLoading && !this.props.isLoading) {
            this.props.navigation.navigate('Profile')
        }
    }

    login = () => {
        this.props.onLogin({ ...this.state })
    }
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.titulo}>InfoAcad</Text>
                <View style={styles.viewBorder}>
                    <TextInput placeholder='Usuário' style={styles.input}
                        autoFocus={true} keyboardType='email-address'
                        value={this.state.email}
                        onChangeText={email => this.setState({ email })} />
                </View>
                <View style={styles.viewBorder}>
                    <TextInput placeholder='Senha' style={styles.input}
                        secureTextEntry={true} value={this.state.password}
                        onChangeText={password => this.setState({ password })} />
                </View>
                <TouchableOpacity onPress={this.login} style={styles.button}>
                    <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>
                <View style={styles.flexRow}>
                    <TouchableOpacity onPress={() => {
                        this.props.navigation.navigate('Register')
                    }} style={styles.button}>
                        <Text style={styles.buttonText}>Criar nova conta</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={this.login} style={styles.button}>
                        <Text style={styles.buttonText}>Recuperar Senha</Text>
                    </TouchableOpacity>
                </View>
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
        justifyContent: 'center',
    },
    button: {
        marginTop: 30,
        padding: 10,
        backgroundColor:"#309F41",
        borderRadius:15
    },
    buttonText: {
        fontSize: 20,
        color: '#FFF'
    },
    input: {

    },
    titulo: {
        fontSize: 50,
        fontWeight: 'bold',
        color:'#309F41',
        textShadowColor : "#EEE"
    },
    viewBorder:{
        backgroundColor: '#EEE',
        borderRadius: 15,
        marginTop: 20,
        width: '90%',
        height: 40,
        borderWidth: 2,
        borderColor: '#309F41',
    },
    flexRow:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
     footer:{
        flex: 1,
        alignItems: 'center',
        backgroundColor:"#FFF",
        justifyContent: 'flex-end'
    },
})

const mapStateToProps = ({ user }) => {
    return {
        isLoading: user.isLoading
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onLogin: user => dispatch(login(user))
    }
}

// export default Login
export default connect(mapStateToProps, mapDispatchToProps)(Login)