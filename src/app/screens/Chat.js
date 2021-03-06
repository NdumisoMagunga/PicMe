import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import TopBar from '../components/TopBar';
const logo= require('../images/logo.jpg');

class Chat extends Component {

    render() {
        return (
            <View>
                <TopBar  />
            <View style={styles.container}>

                <Text>Contact</Text>
            </View>
            </View>
        )
    }
}

const styles = StyleSheet.create ({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
      }
})

export default Chat;