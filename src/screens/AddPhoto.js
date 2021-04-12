import React, { Component, useState } from 'react'
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
import DropDownPicker from 'react-native-dropdown-picker/src';
import DatePicker from 'react-native-datepicker';

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
                titulo: '',
                data: '',
                tag: '',
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
            data: this.state.data,
            tag: this.state.tag,
            titulo: this.state.titulo,

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
                        <Icon name='image' size={150} color='#EEE' justifyContent= 'center' alignItems = 'center' />
                </View>  
            )
        }
        return (
            <ScrollView>
                <View style={styles.container}>
                    <Text style={styles.title}>Realizar Publicação</Text>                   
                    <View style={styles.viewBorder}>
                        <TextInput placeholder='Título da Publicação' style={styles.input}
                        autoFocus={false} value={this.state.titulo}
                        onChangeText={titulo => this.setState({ titulo })} />
                    </View>
                    {/* <View style={styles.viewBorder}>
                        <TextInput placeholder='Data da Publicação' style={styles.input}
                        value={this.state.data}  keyboardType = 'numeric'
                        onChangeText={data => this.setState({ data })} />
                    </View> */}
                    <View style={styles.viewBorder}>
                    <DatePicker 
                            style={{width: '100%'}}
                            date={this.state.data}
                            mode="date"
                            placeholder="Selecione a Data"
                            format="DD/MM/YYYY"
                            minDate="01/01/2021"
                            maxDate="31/12/2029"
                            confirmBtnText="Confirmar"
                            cancelBtnText="Cancelar"
                            customStyles={{
                            dateIcon: {
                                position: 'absolute',
                                left: 0,
                                top: 4,
                                marginLeft: 0
                            },
                            dateInput: {
                                marginLeft: 30,
                                borderWidth: 0,
                                alignItems: 'flex-start'
                            }
                            }}
                            onDateChange={(data) => {this.setState({data: data})}}
                        />
                    </View>
                    
                    
                    <DropDownPicker style={styles.combo}
                    items={[
                        {label: 'Assistência Estudantil', value: 'Assistência Estudantil',},
                        {label: 'Biblioteca', value: 'Biblioteca',},
                        {label: 'Calendário Acadêmico', value: 'Calendário Acadêmico',},
                        {label: 'Campanhas', value: 'Campanhas',},
                        {label: 'CELIF', value: 'CELIF',},
                        {label: 'CODIC', value: 'CODIC',},
                        {label: 'Direção Geral', value: 'Direção Geral',},
                        {label: 'Evento', value: 'Evento',},
                        {label: 'Eventos Institucionais', value: 'Eventos Institucionais',},
                        {label: 'Extensão', value: 'Extensão',},
                        {label: 'Gestão', value: 'Gestão',},
                        {label: 'GT Pessoas', value: 'GT Pessoas',},
                        {label: 'Institucional', value: 'Institucional',},
                        {label: 'Internacional', value: 'Internacional',},
                        {label: 'Pesquisa', value: 'Pesquisa',},
                        {label: 'PIBID', value: 'PIBID',},
                        {label: 'Processo Seletivo', value: 'Processo Seletivo',},
                        {label: 'Reitoria', value: 'Reitoria',},
                        {label: 'Secretaria Acadêmica', value: 'Secretaria Acadêmica',},
                        {label: 'SEPAE', value: 'SEPAE',},

                        {label: 'Técnico em Alimentos', value: 'Técnico em Alimentos', },
                        {label: 'Técnico em Serviços Jurídicos', value: 'Técnico em Serviços Jurídicos',},
                        {label: 'Administração', value: 'Administração',},
                        {label: 'Agronomia', value: 'Agronomia',},
                        {label: 'Artes Visuais', value: 'Artes Visuais',},
                        {label: 'Ciências Biológicas', value: 'Ciências Biológicas',},
                        {label: 'Ciências Contábeis', value: 'Ciências Contábeis',},
                        {label: 'Direito', value: 'Direito',},
                        {label: 'Educação Física', value: 'Educação Física',},
                        {label: 'Enfermagem', value: 'Enfermagem',},
                        {label: 'Farmácia', value: 'Farmácia',},
                        {label: 'Letras - Português/Inglês', value: 'Letras - Português/Inglês',},
                        {label: 'Pedagogia', value: 'Pedagogia',},
                        {label: 'Química', value: 'Química',},
                        {label: 'Sistemas de Informação', value: 'Sistemas de Informação',},
                        {label: 'Pós Graduação em Linguagens Híbridas e Educação', value: 'Pós Graduação em Linguagens Híbridas e Educação',},
                        
                        {label: 'Outro', value: 'Outro',}            
                    ]}
                    
                    placeholder = 'Selecione uma tag'
                    defaultValue={this.props.tag}
                    onChangeItem={item => this.setState({tag: item.value})}

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
                    {publiArea}
                    <View style={styles.container1}>
                        <TouchableOpacity onPress={this.pickImage} style={styles.button}>
                            <Text style={styles.buttonText}>Adicionar Foto</Text>  
                        </TouchableOpacity>
                        <TextInput placeholder='Texto da Publicação'
                            style={styles.inputTexto} value={this.state.comment}
                            editable={this.props.name != null}
                            onChangeText={comment => this.setState({ comment })} />
                        <TouchableOpacity onPress={this.save}
                            disabled={this.props.loading}
                            style={[styles.button, this.props.loading ? styles.buttonDisabled : null]}>
                            <Text style={styles.buttonText}>Salvar</Text>
                        </TouchableOpacity>
                    </View>
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
    container1: {
        flex: 1,
        alignItems: 'center',
        width: '100%'
    },
    title: {
        fontSize: 30,
        marginTop: Platform.OS === 'ios' ? 20 : 50,
        fontWeight: 'bold',
        color:'#309F41',
    },
    imageContainer: {
        flex: 1,
        width: '90%',
        height: Dimensions.get('window').width / 3,
        backgroundColor: '#FFF',
        marginTop: 10,
        borderWidth: 1,
        borderColor: '#888',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
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
        borderRadius: 10
    },
    buttonText: {
        fontSize: 20,
        color: '#FFF',
    },
    inputTexto: {
        marginTop: 20,
        width: '90%',
        height: Dimensions.get('window').width / 2,
        borderWidth: 2,
        borderColor: '#309F41',
        borderRadius: 10,
        textAlignVertical: 'top',
        backgroundColor: '#FFF'
    },
    buttonDisabled: {
        backgroundColor: '#FFF'
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
    container2: {
        flex: 1,
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        padding: 20,
        color: '#309F41'
    },

    datePickerStyle: {
        width: 200,
        marginTop: 20,
    },
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