import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
const logo = require('../images/logo.jpg');

class Chat extends Component {

    render() {
        return (
            <View style={styles.container}>
            <View style={styles.innerContainer}>
            <TouchableOpacity style={{width:60,paddingHorizontal:10}} onPress={this.props.navigation}>
            <Icon size={25} color='black' name='md-arrow-back' /> 
            </TouchableOpacity>
            <Text style={styles.text}>{this.props.title}</Text>
            <Image source={logo} style={styles.logo} />
            </View>
            </View>
        )
    }
}

const styles = StyleSheet.create ({
    container: {
       height:50,
       backgroundColor: 'white',
      },

      innerContainer: {
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems:'center',
      },

      logo: {
          height: 50,
          width: 110,
          resizeMode: 'contain'
      },

      text: {
        fontSize:18,
        fontWeight:'800',
        textAlign:'right',
        color:'black',
        marginLeft:0
      }

})

export default Chat;