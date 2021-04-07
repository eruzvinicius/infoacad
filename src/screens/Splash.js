import React, { Component } from 'react'
import { View, Text, StyleSheet, Image} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import { StateUtils } from 'react-navigation'

export default class Splash extends Component {
    componentDidMount = () => {
        setTimeout(
            () => { this.props.navigation.navigate('App') },
            2000
        )
    }

    render() {
        return (            
            <View style={styles.container}>
                <View  style={styles.start}/>
                <View style={styles.center}>
                <Icon name='newspaper-o' size={200} color={'#309F41'} />
                    <Text style={styles.titulo}>InfoAcad</Text>
                </View>
                <View style={styles.footer}>
                <Image source={require('../../assets/imgs/IFPR_logo.png')}
                    style={styles.image} />
                <Text>Desenvolvido por Eruz Vinicius Hüffner Lourenço</Text>
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
        backgroundColor:"#FFF",
    },
    image: {
        height: 200,
        width: 200,
        resizeMode: 'contain',
    },
    titulo: {
        fontSize: 70,
        fontWeight: 'bold',
        color:'#309f41',
        textShadowColor : "#EEE"
    },
    footer:{
        flex: 1,
        alignItems: 'center',
        backgroundColor:"#FFF",
        justifyContent: 'flex-end'
    },
    center:{
        flex: 3,
        alignItems: 'center',
        backgroundColor:"#FFF",
    },
    start:{
        flex: 1,
        justifyContent: 'flex-start'
    }
})