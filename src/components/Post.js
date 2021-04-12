import React, { Component } from 'react'
import { connect } from 'react-redux'
import { StyleSheet, View, Image, Dimensions } from 'react-native'

import Author from './Author'
import Comments from './Comments'
import AddComment from './AddComment'

class Post extends Component {
    render() {
        const addComment = this.props.name ?
            <AddComment postId={this.props.id} /> : null
        return (
            <View style={styles.container}>
                <Author email={this.props.email}
                    nickname={this.props.nickname} />
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
        width: '97%',
        backgroundColor: '#FFF',
        borderRadius: 20,
        borderWidth: 1,
        borderColor: '#CCC',
        shadowColor: '#CCC',
        margin: 3
    },
    image: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').width * 3 / 4,
        resizeMode: 'contain'
    }
})

const mapStateToProps = ({ user }) => {
    return {
        name: user.name
    }
}

export default connect(mapStateToProps)(Post)