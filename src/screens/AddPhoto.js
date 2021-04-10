import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addPost } from '../store/actions/posts'
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    TextInput,
    Image,
    Dimensions,
    Platform,
    ScrollView,
    Alert,
} from 'react-native'
import ImagePicker from 'react-native-image-picker'
import Icon from 'react-native-vector-icons/FontAwesome'

const noUser = 'Você precisa estar logado e possuir permissão para fazer publicações'

class AddPhoto extends Component {
    state = {
        image: null,
        comment: '',
        editMode: false
    }

    componentDidUpdate = prevProps => {
        if (prevProps.loading && !this.props.loading) {
            this.setState({
                image: null,
                comment: '',
                editMode: false
            })
            this.props.navigation.navigate('Feed')
        }
    }

    pickImage = () => {
        if (!this.props.name) {
            Alert.alert('Falha!', noUser)
            return
        }

        ImagePicker.showImagePicker({
            title: 'Escolha a imagem',
            maxHeight: 720,
            maxWidth: 1280
        }, res => {
            if (!res.didCancel) {
                this.setState({ image: { uri: res.uri, base64: res.data } })
            }
        })
        this.setState({editMode: true})
    }
    

    save = async () => {
        if (!this.props.name) {
            Alert.alert('Falha!', noUser)
            return
        }

        this.props.onAddPost({
            id: Math.random(),
            nickname: this.props.name,
            email: this.props.email,
            image: this.state.image,
            comments: [{
                nickname: this.props.name,
                comment: this.state.comment
            }]
        })
    }

    render() {
        let publiArea = null
        if(this.state.editMode){
            publiArea = (
                <View style={styles.imageContainer}>
                        <Image source={this.state.image} style={styles.image} />
                </View>
            )
        }else{
            publiArea = (
                <View style={styles.imageContainer}>
                        <Icon name='image' size={200} color='#EEE' justifyContent= 'center' alignItems = 'center' />
                </View>  
            )
        }
        return (
            <ScrollView>
                <View style={styles.container}>
                    <Text style={styles.title}>Realizar Publicação</Text>
                    {publiArea}
                    <TouchableOpacity onPress={this.pickImage} style={styles.button}>
                        <Text style={styles.buttonText}>Adicionar Foto</Text>  
                    </TouchableOpacity>
                    <TextInput placeholder='Texto da Publicação'
                        style={styles.input} value={this.state.comment}
                        editable={this.props.name != null}
                        onChangeText={comment => this.setState({ comment })} />
                    <TouchableOpacity onPress={this.save}
                        disabled={this.props.loading}
                        style={[styles.button, this.props.loading ? styles.buttonDisabled : null]}>
                        <Text style={styles.buttonText}>Salvar</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        )
    }
}  

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },
    title: {
        fontSize: 30,
        marginTop: Platform.OS === 'ios' ? 30 : 10,
        fontWeight: 'bold',
        color:'#309F41',
    },
    imageContainer: {
        width: '90%',
        height: Dimensions.get('window').width / 2,
        backgroundColor: '#FFF',
        marginTop: 10,
        borderWidth: 2,
        borderColor: '#309F41',
        justifyContent: 'center',
        alignItems: 'center'
    },
    image: {
        width: '100%',
        height: Dimensions.get('window').width / 2,
        resizeMode: 'center'
    },
    button: {
        marginTop: 30,
        padding: 10,
        backgroundColor:'#309F41',
        borderRadius: 15
    },
    buttonText: {
        fontSize: 20,
        color: '#FFF',
    },
    input: {
        marginTop: 20,
        width: '90%',
        height: Dimensions.get('window').width / 2,
        borderWidth: 2,
        borderColor: '#309F41',
        borderRadius: 15,
    },
    buttonDisabled: {
        backgroundColor: '#FFF'
    }
})

const mapStateToProps = ({ user, posts }) => {
    return {
        email: user.email,
        name: user.name,
        loading: posts.isUploading
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onAddPost: post => dispatch(addPost(post))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddPhoto)