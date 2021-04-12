import React, { Component } from 'react'
import { connect } from 'react-redux'
import { logout } from '../store/actions/user'
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import { Gravatar } from 'react-native-gravatar'

class Profile extends Component {
    logout = () => {
        this.props.onLogout()
        this.props.navigation.navigate('Auth')
    }

    render() {
        const options = { email: this.props.email, secure: true }
        return (
            <View style={styles.container} >
                <View style={styles.container1}>
                    <Gravatar options={options} style={styles.avatar} />
                    <Text style={styles.nickname}>{this.props.name}</Text>
                </View>
                <View style={styles.container2}>
                    <Text style={styles.others}>CPF: {this.props.cpf}</Text>
                    <Text style={styles.others}>Email: {this.props.email}</Text>
                    <Text style={styles.others}>Categoria: {this.props.categoria}</Text>
                    <Text style={styles.others}>Curso: {this.props.curso}</Text>
                </View>
                <View>
                <TouchableOpacity onPress={this.logout}
                    style={styles.button}>
                    <Text style={styles.buttonText}>Logout</Text>
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
        backgroundColor:"#FFF",
        alignItems:'center'
    },
    container1: {
        flex: 2,
        backgroundColor:"#FFF",
        alignItems: 'center',
        },
    container2: {
        flex: 1,
        alignItems: 'flex-start',
        justifyContent: 'center',
        backgroundColor:"#FFF",
    },
    footer:{
        flex: 1,
        alignItems: 'center',
        backgroundColor:"#FFF",
        justifyContent: 'flex-end'
    },
    avatar: {
        width: 150,
        height: 150,
        borderRadius: 75,
        marginTop: 100
    },
    nickname: {
        marginTop: 30,
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 30
    },
    others: {
        marginTop: 10,
        fontSize: 20,
   },
    button: {
        marginTop: 30,
        padding: 10,
        backgroundColor: '#309F41',
        borderRadius: 10
    },
    buttonText: {
        fontSize: 20,
        color: '#FFF'
    },
    
})

const mapStateToProps = ({ user }) => {
    return {
        email: user.email,
        name: user.name,
        cpf: user.cpf,
        categoria: user.categoria,
        curso: user.curso
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onLogout: () => dispatch(logout())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile)
