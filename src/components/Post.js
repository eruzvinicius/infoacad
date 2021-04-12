import React, { Component } from 'react'
import { connect } from 'react-redux'
import { StyleSheet, View, Image, Dimensions, Text } from 'react-native'

import Author from './Author'
import Comments from './Comments'
import AddComment from './AddComment'

class Post extends Component {
    render() {
        const addComment = this.props.name ?
            <AddComment postId={this.props.id} /> : null
        return (
            <View style={styles.container}>
                {/* <Author email={this.props.email} nickname={this.props.nickname} /> */}
                <Text style={styles.data}>{this.props.data}</Text>
                <Text style={styles.tag}>{this.props.tag}</Text>
                <Text style={styles.titulo}>{this.props.titulo}</Text>

                
                <Image source={{ uri: this.props.image }} style={styles.image} />                
                <Comments comments={this.props.comments} />
                {addComment}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: Dimensions.get('window').width,
        backgroundColor: '#FFF',
        borderRadius: 15,
        borderWidth: 1,
        borderColor: '#CCC',
        shadowColor: '#CCC',
        margin: 3
    },
    image: {
        width: '100%',
        height: Dimensions.get('window').width * 3 / 4,
        resizeMode: 'contain'
    },
    titulo:{
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        color: '#309F41',
        fontWeight: 'bold',
        fontSize: 22
    },
    data:{
        width: '20%', 
        textAlign: 'center',
        alignItems: 'flex-end',
        alignSelf: 'flex-end',
        marginTop:5,
        marginRight: 10,
        borderWidth:1,
        borderColor: '#309F41',
        borderRadius: 10,
    },
    tag:{
        textAlign: 'center',
        alignItems: 'flex-start',
        alignSelf: 'flex-start',
        borderWidth:1,
        borderColor: '#309F41',
        borderRadius: 10,
        color: '#FFF',
        margin: 10,
        padding: 10,
        fontSize: 16, 
        backgroundColor: '#309F41'
    },

})

const mapStateToProps = ({ user }) => {
    return {
        name: user.name
    }
}

export default connect(mapStateToProps)(Post)