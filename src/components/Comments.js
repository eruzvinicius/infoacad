import React, { Component } from 'react'
import {
    View,
    Text,
    StyleSheet,
    Dimensions
} from 'react-native'

class Comments extends Component {
    render() {
        let view = null
        if (this.props.comments) {
            view = this.props.comments.map((item, index) => {
                return (
                    <View style={styles.commentContainer} key={index}>
                        <Text style={styles.nickname}>{item.nickname}: </Text>
                        <Text style={styles.comment}>{item.comment}</Text>
                    </View>
                )
            })
        }

        return (
            <View style={styles.container}>
                {view}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 5,        
        width: '100%',

    },
    commentContainer: {
        flexDirection: 'row',
        marginTop: 5,
        width: '100%',
        borderColor: '#EEE',
        borderWidth: 1,
        borderRadius: 10
    },
    nickname: {
        flex:1,
        marginLeft: 3,
        width: '25%',
        fontWeight: 'bold',
        color: '#444'
    },
    comment: {
        color: '#555',
        width: '75%',
    }
})

export default Comments